const clockContainer = document.querySelector(".js-clock");
const clockTile = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const mins = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTile.innerText=`${
        hours < 10 ? `0${hours}` : `${hours}`}:${
            mins < 10 ? `0${mins}` : `${mins}`}:${
                 seconds < 10 ? `0${seconds}` : `${seconds}`
    }`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();