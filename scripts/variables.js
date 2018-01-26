var d = document,
    inputValue = d.getElementById("inputValue"),
    liveOutput = d.getElementById("liveOutput");

inputValue.onkeyup = function () {
    liveOutput.textContent = this.value;
};