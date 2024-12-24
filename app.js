
let Scoreyours=document.querySelector("#yourScore");
let Scorecomputers=document.querySelector("#computerScore");
let circles=document.querySelectorAll(".circle");
const choose=["rock","paper","scissors"];
const msgContainer = document.querySelectorAll(".msg-container");
let youCount=0;
let computerCount=0;
let tempText=document.querySelector("#msg");
let OverallText=document.querySelector("#msg2");
let finalText=document.querySelector("#msg3");
let resetGame=document.querySelector(".ResetGame");
let newGame=document.querySelector(".NewGame");
circles.forEach((circ)=>
{
    let tempYouCount=0;
    let tempComputerCount=0;
    circ.addEventListener("click", ()=>
    {
        let choice=Math.floor(Math.random() * choose.length)
        let randomChoice = choose[choice];
        console.log(choice);
       if(circ.id==="rock")
       {
        console.log("Rock clicked");
        console.log(randomChoice);
           if(randomChoice==="rock")
           {
            youCount=youCount+0;
            computerCount=computerCount+0;
            tempYouCount=0;
            tempComputerCount=0;
           }
           else if(randomChoice==="paper")
           {
            youCount=youCount+0;
            computerCount=computerCount+1;
            tempYouCount=0;
            tempComputerCount=1;
           }
           else if(randomChoice==="scissors")
            {
             youCount=youCount+1;
             computerCount=computerCount+0;
             tempYouCount=1;
             tempComputerCount=0;
            }

       }
       else if(circ.id==="paper")
       {
        
        console.log("Paper clicked");
        console.log(randomChoice);
        if(randomChoice==="rock")
            {
             youCount=youCount+1;
             computerCount=computerCount+0;
             tempYouCount=1;
             tempComputerCount=0;
            }
            else if(randomChoice==="paper")
            {
             youCount=youCount+0;
             computerCount=computerCount+0;
             tempYouCount=0;
             tempComputerCount=0;
            }
            else if(randomChoice==="scissors")
             {
              youCount=youCount+0;
              computerCount=computerCount+1;
              tempYouCount=0;
              tempComputerCount=1;
             } 
       }
       else if(circ.id==="scissors")
        {
            console.log("Scissors clicked");
            console.log(randomChoice);
            if(randomChoice==="rock")
                {
                 youCount=youCount+0;
                 computerCount=computerCount+1;
                 tempYouCount=0;
                 tempComputerCount=1;
                }
                else if(randomChoice==="paper")
                {
                 youCount=youCount+1;
                 computerCount=computerCount+0;
                 tempYouCount=1;
                 tempComputerCount=0;
                }
                else if(randomChoice==="scissors")
                 {
                  youCount=youCount+0;
                  computerCount=computerCount+0;
                  tempYouCount=0;
                  tempComputerCount=0;
                 } 
        }
    Scoreyours.innerText=`${youCount}`;
    Scorecomputers.innerText=`${computerCount}`;
    isEnd(youCount,computerCount);
    displayScore(tempYouCount,tempComputerCount);
    displayOverallScore(youCount,computerCount);
    });
    
   
    
    
});
const isEnd=(a,b)=>
    {
        if(a==5 || b==5)
        {
            disableButtons();
            if(a==5)
                {
                    
                   finalText.innerText="Congratulations!!, you are the winner";
                }
                else if(b==5)
                {
                   
                   finalText.innerText="Ooops!!, you lost";
                }
        }
         
         
    };

    
const displayScore=(a,b)=>

{
    
     if(a>b)
     {
        tempText.innerText="You, won the round!!";
     }
     else if(b>a){
        tempText.innerText="Computer, won the round!!";
     }
     else{
        tempText.innerText="This round is a tie!!";
     }

};

const displayOverallScore=(a,b)=>
    {
         if(a>b)
         {
            OverallText.innerText="You are leading overall!!";
         }
         else if(b>a){
            OverallText.innerText="Computer is leading overall";
         }
         else if(a===b){
            OverallText.innerText="Overall its a ties";
         }

    };


const disableButtons=()=>{
circles.forEach((btn)=>
{
    btn.disabled=true;
});
};

const enableButtons=()=>{
    circles.forEach((btn)=>
    {
        btn.disabled=false;
    });
    };

    const resetBtn = () => {
        youCount = 0;
        computerCount = 0;
        tempYouCount = 0;
        tempComputerCount = 0; 
        enableButtons();
        tempText.innerText = ""; 
        OverallText.innerText = ""; 
        finalText.innerText = ""; 
        Scoreyours.innerText = "0"; 
        Scorecomputers.innerText = "0"; 
    };
    


resetGame.addEventListener("click", resetBtn);
newGame.addEventListener("click", resetBtn);


