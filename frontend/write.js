const form= document.getElementById("write-form");

const handleSubmitForm= async(event) => {
    event.preventDefault();
    await fetch("/students", {
    method: "POST",
    body: new FormData(form)
});
console.log("complete");
}


form.addEventListener("submit", handleSubmitForm);