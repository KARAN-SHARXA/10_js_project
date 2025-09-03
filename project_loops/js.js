const input = document.getElementById("numInput")
const button = document.getElementById("generateBtn")
const output = document.getElementById("output");
const privious = document.getElementById("privous")



button.addEventListener("click",function(){
    let num = input.value;
    output.innerHTML=" ";
    input.value =" ";
    let tabeHTML = " ";

    let line = 1;
    for(let i = 1;i<=10;i++){
        line = num + " X " + i + "=" + (num * i);
        tabeHTML+= `<p>${line}</p>`;
        // let p = document.createElement("p");

        // p.textContent = line;
        // output.appendChild(p)
        // localStorage.setItem("lastTable",p.textContent);
        
    }

    output.innerHTML=tabeHTML;

    localStorage.setItem("lastNumber",num);
    localStorage.setItem("lastTable",tabeHTML);
});


privious.addEventListener("click",function(){
    output.innerHTML=' ';
    let pt=localStorage.getItem("lastTable");
    let privious_value =localStorage.getItem("lastNumber");
    input.value=privious_value;
    output.innerHTML=pt;
    
})