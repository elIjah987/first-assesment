//D.R.Y. "Don't Repeat Yourself"

let firstVariable = "Pizza"
let secondVariable = 23
let thirdVariable = true
let fourthVariable = 23.1

let trueOrFalse1 = true
if(trueOrFalse1){
    return 1
    }
    else {
        return 2
    }

for(i = 0; i <= 100; i+= 2){
    console.log(i)
}

let printHello = true
let helloCounter = 0
while(printHello){
    console.log("Hello")
    helloCounter ++
    if(helloCounter == 20){
        printHello = false
    }
}


let numberOfCookies = 5 + 5

function trueOrFalse(randomVariable){
    if (randomVariable === numberOfCookies){
        console.log(randomVariable + " is true!")
        return randomVariable
        }
            else {
                console.log("False!")
        }
    }
    
trueOrFalse(10)