function updateclock(){
    const now  = new Date();

    let hours = now.getHours().toString().padStart(2, "0");   // hours nikala
  let minutes = now.getMinutes().toString().padStart(2, "0"); // minutes nikala
  let seconds = now.getSeconds().toString().padStart(2, "0"); // seconds nikala
   

    document.getElementById("clock").textContent=`${hours}:${minutes}:${seconds}`;
}


setInterval(updateclock,1000);


updateclock();