const form= document.getElementById("write-form");

const handleSubmitForm= async(event) => {
    event.preventDefault();
    try{
    const res= await fetch("/students", {
    method: "POST",
    body: new FormData(form)
});
//backend의 응답 가져오기
const data= await res.json();
if(data === "200")
    //응답이 200이면 다시 root로 돌리기
    window.location.pathname= "/";
    } catch (e){
        console.error(e);
    }
}


form.addEventListener("submit", handleSubmitForm);