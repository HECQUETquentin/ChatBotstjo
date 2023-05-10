const dialogs=[
    {question:"toto",answer:"tata"}, 
    {question:"Salut", answer:"Salut"}, 
    {question:"ça va ?", answer:"bien et toi ?"}
]

const datalist = document.querySelector("#datalist");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const inputdialog = document.querySelector("#inputdialog");

inputdialog.addEventListener("change", function(event){
    event.preventDefault();
    question.innerHTML=document.querySelector(".form-question").value
    answer.innerHTML="Coucou"
    dialogs.forEach(element =>{
        if(element.question === document.querySelector(".form-question").value){
            answer.innerHTML=element.answer
        }
    })
})

dialogs.forEach((dialog) =>{
    datalist.innerHTML += `<option value="${dialog.question}">`;
});