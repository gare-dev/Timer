const week = document.getElementById("week");
const day = document.getElementById("day");
const hora = document.getElementById("hora");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

let secTimer = 0;
let minTimer = 0;
let hourTimer = 0;
let dayTimer = 0;
let weekTimer = 0;

function addTimerRefactor () {

    secTimer++;

    sec.innerHTML = formatarNumero(secTimer);

    if(secTimer === 60){

        secTimer = 0;
        minTimer++;

        min.innerHTML = formatarNumero(minTimer);

        if(minTimer === 60) {

            minTimer = 0;
            hourTimer++;

            hora.innerHTML = formatarNumero(hourTimer);

            if(hourTimer === 24){

                hourTimer = 0;
                dayTimer++;

                day.innerHTML = formatarNumero(dayTimer)

                if(dayTimer === 7){

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


// Código Antigo

/* function addTimer() {






    if (secTimer < 10) {
        sec.innerHTML = "0" + secTimer;
    }
    else {
        sec.innerHTML = secTimer;
    }

    secTimer++;

    if (secTimer == 60) {

        minTimer++;
        secTimer = 0;

        if (minTimer < 10) {
            min.innerHTML = "0" + minTimer;
        }
        else {
            min.innerHTML = minTimer;
        }
    }

    if (minTimer == 60) {

        hourTimer++;
        minTimer = 0;

        hora.innerHTML = hourTimer;

        if (hourTimer < 10) {
            hora.innerHTML = "0" + hourTimer;
        }
        else {
            hora.innerHTML = hourTimer
        }
    }



}

*/






