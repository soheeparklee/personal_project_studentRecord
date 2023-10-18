from fastapi import FastAPI, UploadFile, Form
from fastapi.staticfiles import StaticFiles
from typing import Annotated

app= FastAPI()

@app.post("/students")
def create_student(image: UploadFile, 
                    name: Annotated[str, Form()],
                    grade: Annotated[int, Form()],
                    classroom: Annotated[str, Form()],
                    gender: Annotated[str, Form()]
                    ):
    print(image, name, grade, classroom, gender)
    return "200"


app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")