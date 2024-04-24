const week = document.getElementById("week");
const day = document.getElementById("day");
const hora = document.getElementById("hora");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const body = document.getElementById('bodyy')

const box = document.getElementById('notifier');
const btt = document.getElementById('btt');





let secTimer = 0;
let minTimer = 0;
let hourTimer = 0;
let dayTimer = 0;
let weekTimer = 0;


let sixZero = 60;
let twoFour = 24;
let seven = 7;




function addTimerRefactor() {



    secTimer++;

    sec.innerHTML = formatarNumero(secTimer);

    if (secTimer === sixZero) {

        secTimer = 0;
        minTimer++;

        min.innerHTML = formatarNumero(minTimer);

        if (minTimer === sixZero) {

            minTimer = 0;
            hourTimer++;

            hora.innerHTML = formatarNumero(hourTimer);

            if (hourTimer === twoFour) {

                hourTimer = 0;
                dayTimer++;

                day.innerHTML = formatarNumero(dayTimer)

                if (dayTimer === seven) {

                    dayTimer = 0;
                    weekTimer++;

                    week.innerHTML = formatarNumero(weekTimer);
                }

            }
        }
    }

}

function formatarNumero(numero) {

    return numero < 10 ? `0${numero}` : numero;
}

setInterval(addTimerRefactor, 1000);


btt.addEventListener('click', () => {

    if (sixZero === 60) {
        sixZero = 5;
        twoFour = 5;
        seven = 5;
    }
    else {
        sixZero = 60;
        twoFour = 24;
        seven = 7;
    }


    if (box.style.backgroundColor === "red" && secTimer < 5) {
        box.style.backgroundColor = "Green"
    }
    else {
        box.style.backgroundColor = "red"
    }




})

bodyy.addEventListener('load', () => {
    btt.click();
})