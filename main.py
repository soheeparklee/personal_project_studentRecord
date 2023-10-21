from fastapi import FastAPI, UploadFile, Form, Response, Depends
from fastapi.staticfiles import StaticFiles
from typing import Annotated
import sqlite3 
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi_login import LoginManager
from fastapi_login.exceptions import InvalidCredentialsException

con= sqlite3.connect("db.db", check_same_thread=False)
cur= con.cursor()

app= FastAPI()


cur.execute(f"""
            CREATE TABLE IF NOT EXISTS student (
	            id INTEGER PRIMARY KEY, 
	            name TEXT NOT NULL,
	            image BLOB,
	            grade INTEGER NOT NULL,
	            classroom TEXT,
	            gender TEXT NOT NULL,
	            insertAt INTEGER NOT NULL
            );
            """)


SECRET= "studentsaredumb"
manager= LoginManager(SECRET, "/login") 

@manager.user_loader()
def query_user(data):
    WHERE_STATEMENT= f'id="{data}"'
    if type (data) == dict:
         WHERE_STATEMENT= f"""
                        id="{data["id"]}"
                        """
         
    con.row_factory= sqlite3.Row
    cur= con.cursor()
    user= cur.execute(f"""
                    SELECT * from users WHERE {WHERE_STATEMENT}
                    """).fetchone()
    return user 


@app.post("/login")
def login(id: Annotated[str, Form()],
        password: Annotated[str, Form()]):
    user= query_user(id)
    print(user)
    if not user:
        raise InvalidCredentialsException
    elif password != user["password"]:
        raise InvalidCredentialsException
    
    # access token
    access_token= manager.create_access_token(data={
            "sub" :{
                "id": user['id'],
                "name": user['name'],
                "email": user['email']
            }

    })
    return {"access_token": access_token} 

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
def get_students(user= Depends(manager)):
    #column names
    con.row_factory= sqlite3.Row
    cur= con.cursor()
    rows= cur.execute(f"""
                    SELECT * from student;
                        """).fetchall()
    
    return JSONResponse(jsonable_encoder(dict(row) for row in rows))

@app.get("/images/{student_id}")
async def get_image(student_id):
    cur= con.cursor()
    #16진법으로 받아옴
    image_bytes= cur.execute(f"""
                    SELECT image from student WHERE id= {student_id}
                            """).fetchone()[0]
    #16진법을 이미지로 바꿔주기
    return Response(content= bytes.fromhex(image_bytes), media_type="image/*")

@app.post("/signup")
def signup(id: Annotated[str, Form()],
            password: Annotated[str, Form()],
            name:  Annotated[str, Form()],
            email:  Annotated[str, Form()]
            ):
        cur.execute(f"""
                    INSERT or IGNORE INTO users (id, name, email, password)
                    VALUES("{id}", "{name}", "{email}", "{password}")
                    """)
        con.commit()
        return "200"




app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")