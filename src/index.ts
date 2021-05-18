function tick() {
    const hoursEle = document.getElementById("hour");
    const minutesEle = document.getElementById("minutes");
    const periodEle = document.getElementById("period");
    const time = new Date();

    let hour = time.getHours();
    let period:string = null;
    if(hour > 12) {
        hour = hour%12;
        period = "PM"
    } else {
        period = "AM"
    }


    hoursEle.innerText = hour.toString().padStart(2,"0");
    minutesEle.innerText = time.getMinutes().toString().padStart(2,"0");
    periodEle.innerHTML = period;

}

async function changeBackground() {
    const backgroundELe = document.getElementById("background");
    fetch("https://source.unsplash.com/1600x900/?nature,water,architecture,street-photography").then(body=>{
        backgroundELe.style.backgroundImage = `linear-gradient(to left, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${body.url})`;
    });
}

tick();
setInterval(tick,1000);

setInterval(changeBackground, 60*60*1000);

