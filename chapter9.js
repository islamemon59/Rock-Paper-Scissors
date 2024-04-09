// Building Game

let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const comscorepara = document.querySelector("#comscore");

const gencomchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
}

const drawgame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.background = "#081b31";
}

const showWinner = (userwin, userchoice, comchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${comchoice}`;
        msg.style.background = "green";
    } else {
        comscore++;
        comscorepara.innerText = comscore;
        msg.innerText = `You lost. ${comchoice} beats your ${userchoice}`;
        msg.style.background = "red";
    }
}

const playgame = (userchoice) => {
    // Generate computer choice
    const comchoice = gencomchoice();
    if ( userchoice === comchoice) {
        drawgame();
    } else {
        let userwin = true
        if (userchoice === "rock") {
            // scissors, paper
            userwin = comchoice === "paper"? false : true;
        } else if(userchoice === "paper") {
            // rock, scissors
            userwin = comchoice === "scissors"? false : true;
        } else  {
            // paper, rock
            userwin = comchoice === "rock"? false : true;
        }
        showWinner(userwin, userchoice, comchoice);
    }   
}

choices.forEach ((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})