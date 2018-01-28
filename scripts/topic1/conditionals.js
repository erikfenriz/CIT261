function conditionals(){
    var message;
    var number = parseInt(document.getElementById("one").value);
    document.getElementById("outputCond").innerHTML = " ";
    if((number === null) || (number <= 9)){
        message = "Where are the books?!";
    }else if(number >= 10 && number <= 99){

        message = "I read more books"
    }else if (number >= 100 && number < 9000) {
        message = "I would still read more";
    }else if(number >= 9000){
        message = "Condition is OVER9000";
    } else if(message === undefined){
            message = "Where are the books?!";
        }


    document.getElementById("outputCond").innerHTML = message;

}