const renderData= (data) => {
    const main= document.querySelector("main");
    data.forEach((obj) => {
        const div= document.createElement("div");
        div.className= "main-box"
        div.innerText= obj.name;
        main.appendChild(div);
        
    });
}

const fetchList= async () =>{
    const res= await fetch("/students")
    const data= await res.json();
    renderData(data);
}
fetchList();