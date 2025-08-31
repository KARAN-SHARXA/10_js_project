// Array of images

const images =[
    "https://images.unsplash.com/photo-1756574736109-475a1a503771?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1756314891315-3295b50658f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1756370473190-4c41ddbd5e59?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D"


];

// Array of images (links ya local images de sakte ho)


let index = 0; // current image index

// select elements

const imgElement = document.getElementById("image");
const prevBtn = document.getElementById("prev");
const nexrBtn = document.getElementById("next");

//first image

imgElement.src = images[index];


nexrBtn.addEventListener("click",()=>{
    index++;
    if(index >=images.length) index = 0; // first after laset
    imgElement.src=images[index];
})

prevBtn.addEventListener("click",()=>{
    index--;
    if(index<0) index = images.length-1;  // last after first
    imgElement.src=images[index];
})
