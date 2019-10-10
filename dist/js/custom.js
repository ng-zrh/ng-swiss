"use strict";

function updateTime() {
    const fut = new moment('2020-12-31');
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
    setInterval(updateTime, 1000);
}
