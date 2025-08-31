let counter = 0;

const counterDisplaye = document.getElementById("counter")
const increasebtn = document.getElementById("increase");
const decreasebtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");




function updateDisplay(){
    counterDisplaye.textContent=counter;



    if(counter>0){
        counterDisplaye.style.color="green";
    }else if(counter<0){
        counterDisplaye.style.color="red";
    }else{
        counterDisplaye.style.color="black"
    }
}

increasebtn.addEventListener("click",()=>{
    counter++;
    updateDisplay();
});
decreasebtn.addEventListener("click",()=>{
    counter--;
    updateDisplay();
});
resetBtn.addEventListener("click",()=>{
    counter = 0;
    updateDisplay();

})