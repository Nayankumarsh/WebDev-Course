let myDiv = document .createElement("Div");
function newe(event){
    console.log("chal raha he" + event.target.textContent);
}
myDiv.addEventListener("click",newe);
for(let i=1;i<=100;i++){
    let newElement = document.createElement("p");
    newElement.textContent = "This is para " + i;
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);