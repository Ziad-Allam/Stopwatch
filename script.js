let seconds = 00;
let tens = 00;
let minutes = 00;
let getMins = document.querySelector('.minutes');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnRest = document.querySelector('.reset');
let interval;

btnStart.addEventListener('click', ()=> {
    interval = setInterval(startTime, 10);
    btnStart.classList.remove('active');
    btnStop.classList.add('active');
    btnRest.classList.add('active');
});

btnStop.addEventListener('click', ()=> {
    clearInterval(interval);
    btnStop.classList.remove('active');
    btnStart.classList.add('active');
});

btnRest.addEventListener('click', ()=> {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = minutes;

    btnStart.classList.add('active');
    btnStop.classList.remove('active');
    btnRest.classList.remove('active');


});

function startTime(){
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59){
        minutes++;
        getMins.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(minutes > 9){
        getMins.innerHTML = minutes;
    }
}