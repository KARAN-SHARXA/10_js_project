let counter = 0;
const counterdisplay=document.querySelector("#counter");
const increaseBtn=document.querySelector("#increase");
const decreaseBtn=document.querySelector("#decrease");
const reserbtn=document.querySelector("#reset");

increaseBtn.addEventListener("click",()=>{
    counter++;
    counterdisplay.textContent=counter;
});

decreaseBtn.addEventListener("click",()=>{
    counter--;
    counterdisplay.textContent=counter;
});
reserbtn.addEventListener("click",()=>{
    counter =0;
    counterdisplay.textContent=counter;
});

// counter can be increae by one and decrease by one


//