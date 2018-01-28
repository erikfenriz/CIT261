var d = document,
    inputValue = d.getElementById("inputValue"),
    liveOutput = d.getElementById("liveOutput");


inputValue.onkeyup = function () {
    if(liveOutput.textContent.length < 10) {
        liveOutput.textContent = this.value;
    }else if(liveOutput.textContent.length >= 10){
        this.value = " ";
        liveOutput.textContent = " ";
    }
};