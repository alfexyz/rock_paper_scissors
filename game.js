        const choices = ['rock', 'paper', 'scissors'];

        function getComputerChoice(){
            return choices[Math.floor(Math.random() * 3)];
        }

        function play(playerChoice, computerChoice){
            let ans = '';
            playerChoice = playerChoice.toLowerCase();
            if(playerChoice === 'rock'){
                ans = (computerChoice === 'rock') ? "it's a draw, both chose rock" :
                    (computerChoice === 'paper') ? "computer wins, paper beats rock" : "you win! rock beats scissors";
            } 
            if(playerChoice === 'paper'){
                ans = (computerChoice === 'paper') ? "it's a draw, both chose paper" :
                    (computerChoice === 'scissors') ? "computer wins, scissors beats paper" : "you win! paper beats rock";
            } 
            if(playerChoice === 'scissors'){
                ans = (computerChoice === 'scissors') ? "it's a draw, both chose scissors" :
                    (computerChoice === 'rock') ? "computer wins, rock beats scissors" : "you win! scissors beats paper";
            } 
            return ans;
        }

        let computerChoice = getComputerChoice();
        let playerChoice = 'rock';
        console.log(play(computerChoice, playerChoice));
        computerChoice = getComputerChoice();
        playerChoice = 'rock';
        console.log(play(computerChoice, playerChoice));
        computerChoice = getComputerChoice();
        playerChoice = 'rock';
        console.log(play(computerChoice, playerChoice));
        computerChoice = getComputerChoice();
        playerChoice = 'rock';
        console.log(play(computerChoice, playerChoice));
        computerChoice = getComputerChoice();
        playerChoice = 'rock';
        console.log(play(computerChoice, playerChoice));



