for(let teller = 1; teller <= 100; teller++)

    if(teller  %3 == 0 &&  teller %5){
        console.log( teller + " FizzBuzz")
    }
    else if(teller  %3 == 0){
        console.log( teller + " Fizz")
    }
    else if(teller %5==0){
        console.log( teller + " Buzz")
    }
    else
    console.log(teller)