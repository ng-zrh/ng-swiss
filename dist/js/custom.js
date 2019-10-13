"use strict";

function updateTime() {
    const fut = new moment('2020-06-01');
    const now = new moment();
    const duration = moment.duration(fut.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    document.querySelector('.days').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;

}

if(document.querySelector('.countdown')) {
    updateTime();
    setInterval(updateTime, 1000);
}
