const form= document.querySelector("#signup-form");

const handleSubmit= async (event) =>{
    event.preventDefault();
    const formData= new FormData(form);
    //암호화
    const sha256Password= sha256(formData.get("password"));
    formData.set("password", sha256Password);

    const res= await fetch("/signup",{
        method: "POST",
        body: formData
    })
};

form.addEventListener("submit", handleSubmit )