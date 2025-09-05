let c = 0; ci = 0; cd = 0;
const count = document.getElementById("count");
const inCount = document.getElementById("incCount");
const decCount = document.getElementById("decCount");


function inc(){
    c++;
    ci++
    update();
}

function dec(){
    c=c>0 ? c-1:0;
    cd++
    update();
}
function update(){
    count.textContent=c;
    inCount.textContent=ci;
    decCount.textContent=cd;
}