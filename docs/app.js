const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener('click' , ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    

    // Play match

    const playMatch = ()=> {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector(".playerHand");
        const computerHand = document.querySelector(".computerHand");
        const hands = document.querySelectorAll(".hand-container div");
        const winner = document.querySelector(".winner");
        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation = "";
            })
        })

        // computer options
        const computerOptions = ["Rock", "Paper" , "Scissors"];

        options.forEach(option=> { 
            option.addEventListener('click',function(){
                //computer choice
                const computerNumber = Math.floor (Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                // we need a delay in changing hands image until animation ends
               setTimeout(() => {

                winner.classList.remove("fadeOut");
                

                     //here is where we call compare hands

                compareHands(this.textContent , computerChoice.toLowerCase());

                //update player image
                
                
                if(this.textContent == "scissors")  {
                    // console.log("scissors");
                    playerHand.style.backgroundPosition = "75% 15%";
                    
                    playerHand.style.transform = "rotateY(180deg)  rotate(67deg)";
                    
                } 
                else if(this.textContent== "rock" ) {
                    // console.log("rock");
                    playerHand.style.backgroundPosition = "10% 52%";
                    playerHand.style.transform = "none";
                }
                else if(this.textContent == "paper"){
                    // console.log("paper");
                    playerHand.style.backgroundPosition = "69% 75%";
                    // console.log("bg-updated")
                    playerHand.style.backgroundSize = "265%";
                    playerHand.style.transform = "rotateY(180deg)";
                }
                // update computer hands image--------------------
                console.log(computerChoice);
                if(computerChoice == "Scissors" ){

                    computerHand.style.backgroundPosition = "75% 15%";
                    computerHand.style.transform = "rotate(65deg)";
                }
                else if(computerChoice == "Rock"){
                    computerHand.style.backgroundPosition = "10% 52%";
                    computerHand.style.transform = "rotateY(180deg)"; 
                }
                else if(computerChoice == "Paper"){
                    computerHand.style.backgroundPosition = "69% 75%";
                    computerHand.style.backgroundSize = "265%";
                    computerHand.style.transform = "rotate(3deg)";
                }
               }, 2000);
               
              
                //we need instant animation
                
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                winner.classList.add("fadeOut");
                
            });
        });
        
        
        
    };

    // update score
    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    }
    // compare hands
    const compareHands = ( playerChoice , computerChoice)=> {
       const winner = document.querySelector('.winner');
       if(playerChoice === computerChoice){
        winner.textContent = "It's a Tie !!";
        return;

       }
       // check for Rock
       if(playerChoice === "rock"){
        if(computerChoice === "scissors"){
            winner.textContent = "player Wins !!";
            pScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "computer wins !!";
            cScore++;
            updateScore();
            return;
        }
       }

       // check for paper
       if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            winner.textContent = "computer Wins !!";
            cScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Player wins !!";
            pScore++;
            updateScore();
            return;
        }
       }

       //check for scissors
       if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            winner.textContent = "Computer Wins !!";
            cScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Player  wins !!";
            pScore++;
            updateScore();
            return;
        }
       }
      

    }


    // is call all the inner function
    startGame();
    playMatch();
    
}
game();