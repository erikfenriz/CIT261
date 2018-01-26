var d = document,
    inputValue = d.getElementById("inputValue"),
    liveOutput = d.getElementById("liveOutput");


inputValue.onkeyup = function () {
    if(liveOutput.textContent.length < 30) {
        liveOutput.textContent = this.value;
    }else{
        this.value = 0;
        liveOutput.textContent = " ";
    }
};