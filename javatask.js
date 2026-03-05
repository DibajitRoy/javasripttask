function number (num){
    if(num % 2 == 0){
        console.log( num + "this number is even number");

    }
    else{
        console.log(num +"this number is odd number")
    }
    console.log("number 1 to" + num + " : ")
    for(let i=1; i<=num; i++){
        console.log(i);
    }
}
number(25)