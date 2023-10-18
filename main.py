from fastapi import FastAPI, UploadFile, Form
from fastapi.staticfiles import StaticFiles
from typing import Annotated
import sqlite3 
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

con= sqlite3.connect("db.db", check_same_thread=False)
cur= con.cursor()

app= FastAPI()

@app.post("/students")
async def create_student(image: UploadFile, 
                    name: Annotated[str, Form()],
                    grade: Annotated[int, Form()],
                    classroom: Annotated[str, Form()],
                    gender: Annotated[str, Form()],
                    insertAt: Annotated[int, Form()]
                    ):
    
    # image 
    image_bytes= await image.read()
    # 여기는 sqlite 문법임. 
    # 가져온 데이터를 sqlite db의 표 안에 넣는다. 
    cur.execute(f"""
                INSERT INTO student(name, image, grade, classroom, gender, insertAt)
                VALUES ("{name}", "{image_bytes.hex()}", {grade}, "{classroom}", "{gender}", "{insertAt}")
                """)
    con.commit()
    return "200"


@app.get("/students")
def get_students():
    #column names
    con.row_factory= sqlite3.Row
    cur= con.cursor()
    rows= cur.execute(f"""
                    SELECT * from student;
                        """).fetchall()
    
    return JSONResponse(jsonable_encoder(dict(row) for row in rows))

app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")