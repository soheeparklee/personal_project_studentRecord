const calcTime= (timestamp) =>{
    const curTime= new Date().getTime() - 9*60*60*1000;
    const time= new Date(curTime-timestamp);
    const hour= time.getHours();
    const minutes= time.getMinutes();
    const seconds= time.getSeconds();

    if (hour>0) return `${hour}시간`
    else if (minutes>0) return `${minutes}분`
    else if(seconds = 0 ) return `${seconds}초` 
    else return "방금";  

};

const renderData= (data) => {
    const main= document.querySelector("main");
    data.reverse().forEach(async(obj) => {
        const mainBoxDiv= document.createElement("div");
        mainBoxDiv.className= "main-box"
        main.appendChild(mainBoxDiv);

        const studentMetaDiv= document.createElement("div");
        studentMetaDiv.className= "main-box-student-meta"
        mainBoxDiv.appendChild(studentMetaDiv);

        const metaName= document.createElement("div");
        metaName.className= "student-name"
        metaName.innerText= obj.name;
        studentMetaDiv.appendChild(metaName);
        const metaGrade= document.createElement("div");
        metaGrade.className= "student-grade"
        metaGrade.innerText= `${obj.grade}학년`
        studentMetaDiv.appendChild(metaGrade);
        const metaClass= document.createElement("div");
        metaClass.className= "student-class"
        metaClass.innerText= `${obj.classroom}반`;
        studentMetaDiv.appendChild(metaClass);
        const metaGender= document.createElement("div");
        metaGender.className= "student-gender"
        metaGender.innerText= obj.gender;
        studentMetaDiv.appendChild(metaGender);

        let metaTime= document.createElement("div");
        metaTime.className= "student-gender"
        metaTime.innerText= `${calcTime(obj.insertAt)} 전에 등교하였습니다.`;
        studentMetaDiv.appendChild(metaTime);

        const studentImgDiv= document.createElement("div");
        studentImgDiv.className= "main-box-student-img"
        mainBoxDiv.appendChild(studentImgDiv);

        const studentImg= document.createElement("img");
        studentImgDiv.appendChild(studentImg);
        const res= await fetch(`/images/${obj.id}`)
        const blob = await res.blob();
        const url= URL.createObjectURL(blob);
        studentImg.src= url; 
        
        
        
    });
}

const fetchList= async () =>{
    const res= await fetch("/students")
    const data= await res.json();
    renderData(data);
}
fetchList();