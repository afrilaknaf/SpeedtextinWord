let textareael = document.querySelector(".textarea")
let charcter = document.querySelector(".stat__number--character")
let twittercharcter = document.querySelector(".stat__number--Twitter")
let facebookcharcter = document.querySelector(".stat__number--Facebook")
let word = document.querySelector(".stat__number--words")


textareael.addEventListener("input",function(){
    if(textareael.value.includes("<script>")){
        alert("You cannot use this <script> in the textarea")
        textareael.value=textareael.value.replace("<scr>"," ")
    }
    let numberwords = textareael.value.split(' ').length;
    if(textareael.value.length === 0){
        numberwords=0;
    }
    let numberofcharcter = textareael.value.length;
    let Twitter=280-numberofcharcter;

    if(Twitter<0){
        twittercharcter.style.color="red"
    }
    else{
        twittercharcter.style.color="black"
    }
    let Facebook=2200-numberofcharcter;

    if(Facebook<0){
        facebookcharcter.style.color="red"
    }
    else{
        facebookcharcter.style.color="black"
    }
    word.innerHTML=numberwords
    charcter.innerHTML =numberofcharcter;
    twittercharcter.innerHTML=Twitter;
    facebookcharcter.innerHTML=Facebook;

})
        let seconds = 0;
    let h1 = document.getElementsByClassName("displaytime")[0];
    let h2 = document.getElementsByClassName("typespeed")
    let timer = null;
    function watch() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            clearInterval(timer);
            textareael.setAttribute("disabled","true")
        }
        let sec = seconds < 10 ? "0" + seconds : seconds;
        h1.innerHTML = sec;
        h2.innerHTML=textareael.value.length
    }

    function startStopwatch() {
        if (timer === null) {
            timer = setInterval(watch, 1000);
        }
    }

    function stopStopwatch() {
        clearInterval(timer);
        timer = null;
    }




