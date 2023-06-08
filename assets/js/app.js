const datalist = document.querySelector("#datalist");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const inputdialog = document.querySelector("#inputdialog");

fetch("https://chatbotstjoback.onrender.com/api/v1/dialogs")
.then(response=>response.json())
.then(({data})=>{
    console.log(data);
    data.forEach(dialog => {
        datalist.innerHTML += `<option value="${dialog.question}">`
    })

    inputdialog.addEventListener("change", e=>{
        question.innerHTML=document.querySelector(".form-question").value
        data.forEach(dialog =>{
            if(e.target.value === dialog.question){
                console.log(dialog.answer)
                answer.innerHTML = dialog.answer
            }
        })
    })
})
.catch(error=>console.log(error))