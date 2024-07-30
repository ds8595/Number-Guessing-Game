const min=0;
const max=100;
const answer=Math.floor(Math.random()*(max-min+1));

let guess;
let running=true;
let attempts=1;

while(running){
    guess=window.prompt(`Guess number btw ${min} and ${max}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a valid number");
    }

    else if(guess>100||guess<0){
        window.alert("Enter btw 0 and 100");
    }

    else{
        if(guess>answer){
            window.alert("choose lower");
        }
        else if(guess<answer){
            window.alert("choose higher");
        }
        else{
            window.alert(`correct, the answer is ${answer}. It took you ${attempts} attemts`);
            running=false;
        }
    }
    attempts++;
}
