const title = document.querySelector("#title");
// title.innerHTML = "Hi From JS";
// title.style.color = "red";
// document.title = "I own you now";

// function handleResize(event){
//     console.log("event")
//     //console.log("I have been resized")
// }

// window.addEventListener("resize", handleResize);

// const BASE_COLOR = " "

// function handleClick(){
//     title.style.color = "blue";
// }

// title.addEventListener("click", handleClick);

// const age = prompt("How old are you");

// if (age >18){
//     console.log('you can drink');
// }else {
//     console.log('you cant');
// }


const CLICKED_CLASS = "clicked";

function handleClick() {
    const curretClass = title.className;
    if (curretClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

function init(){
    title.addEventListener("click", handleClick);
}


init();
