const form= document.querySelector("#signup-form");

const checkPassword= () =>{
    const formData= new FormData(form);
    const password1= formData.get("password");
    const password2= formData.get("password2");
    if(password1 === password2){
        return true;
    }else return false;

}

const handleSubmit= async (event) =>{
    event.preventDefault();
    const formData= new FormData(form);
    //암호화
    const sha256Password= sha256(formData.get("password"));
    formData.set("password", sha256Password);

    const checkDiv= document.querySelector("#passwordCheck");

    if (checkPassword()){
        
        const res= await fetch("/signup",{
            method: "POST",
            body: formData,
        
        });
        const data= await res.json()
        if(data === "200"){
            alert("교사 인증에 성공했습니다. ")
            window.location.pathname= "/login.html";
        }
    }else {
        checkDiv.innerText= "password does not match";
        checkDiv.style.color= "red";
    }

    
};

form.addEventListener("submit", handleSubmit )