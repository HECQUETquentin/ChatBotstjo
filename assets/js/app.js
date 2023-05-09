const dialog=[{question:"toto",answer:"tata"}, {question:"Salut", answer:"Salut"}, {question:"ça va ?", answer:"bien et toi ?"}]

document.getElementById("form-api").addEventListener("submit", function(event){
    event.preventDefault();
    document.querySelector(".question").innerHTML=document.querySelector(".form-question").value
    document.querySelector(".answer").innerHTML="Coucou"
    dialog.forEach(element =>{
        if(element.question === document.querySelector(".form-question").value){
            document.querySelector(".answer").innerHTML=element.answer
        }
    })
})