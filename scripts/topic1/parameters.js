function parameters() {

    var tempF = parseFloat(document.getElementById("tempF").value);
    var speed = parseFloat(document.getElementById("speed").value);
    var wind = windChill(tempF, speed);
    wind = wind ? (document.getElementById("outputChill").innerHTML = wind) : 0;


}

function windChill(tempF, speed) {
    var formula = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    return formula;
}
