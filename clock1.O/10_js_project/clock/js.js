function updateclock(){
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();



    hour= hour < 10 ? "0" + hour : hour;
    minutes = minutes<10 ? "0" +minutes:minutes;
    seconds = seconds < 10 ? "0" + seconds:seconds;



    const timestring =`${hour}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent=timestring;


    
}

setInterval(updateclock,1000);
updateclock();
