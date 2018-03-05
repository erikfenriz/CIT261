let secondHand = document.querySelector('.second-hand'),
    minuteHand = document.querySelector('.min-hand'),
    hourHand = document.querySelector('.hour-hand');

function getTime() {
    const date = new Date(),
        secs = 6 * date.getSeconds() + 90,
        mins = 6 * date.getMinutes() + 90,
        hours = 30 * date.getHours() + 90;

    secondHand.style.transform = 'rotate(' + secs + 'deg)';
    minuteHand.style.transform = 'rotate(' + mins + 'deg)';
    hourHand.style.transform = `translateX(5rem) rotate(${hours}deg)`;
}

setInterval(getTime, 1000);