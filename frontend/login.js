const form= document.querySelector("#login-form");


const handleSubmit= async (event) =>{
    event.preventDefault();
    const formData= new FormData(form);
    //암호화
    const sha256Password= sha256(formData.get("password"));
    formData.set("password", sha256Password);

    const res= await fetch("/login", {
        method: "post", 
        body: formData,
    });
    const data= await res.json();
    const accessToken= data.access_token;
    console.log(data)
    console.log(accessToken)
    window.localStorage.setItem("token", accessToken);
    alert("로그인 되었습니다. ")
    window.location.pathname= "/";



    // const infoBtn= document.createElement("button");
    // infoBtn.innerText= "get student info"
    // infoBtn.addEventListener("click", async ()=>{
    //     const res= await fetch("/students", {
    //         headers:{
    //             "Authorization": `Bearer ${accessToken}`,
    //         },
    //     });
    //     const data= await res.json();
    //     console.log(data)
    // });
    // infoDiv.appendChild(infoBtn);

    // if (res.status === 200){
    //     alert("로그인 성공! 학생 정보를 입력해 주세요. ")
    //     window.location.pathname= "/write.html";
    // } else if(res.status === 401){
    //     alert("로그인에 실패했습니다. ")
    //     window.location.reload();
    // }
    
};

form.addEventListener("submit", handleSubmit )