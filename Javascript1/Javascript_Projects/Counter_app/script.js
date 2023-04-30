const countvalue = document.querySelector("#counter");
const increment = ()=>{
    //get value from the UI
    let value = parseInt(countvalue.innerText);
    //update value 
    value = value+1;
    //set the value onto UI
    countvalue.innerText = value;
};

const decrement = ()=>{
    //get value from the UI
    let value = parseInt(countvalue.innerText);
    //update value 
    value = value-1;
    //set the value onto UI
    countvalue.innerText = value;
};
