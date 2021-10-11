/**
یه فانکشنه که با هر بار فشردن دکمه ی ریست سه تا عدد رندوم بین 0تا 255 
تولید میکنه 
 */
  function startGame(){
        
        let buttons = document.getElementsByClassName('colorButton')
        let answerButton = Math.round(Math.random()*(buttons.length-1))
        let heading = document.getElementById('value');
        let answerMessage = document.getElementById('answer');
        answerMessage.innerHTML = "";
        function setColor(button,red,green,blue){
            button.setAttribute('style','background-color: rgb('+ red +','+green +','+blue + ');');
        }

        for(let i=0; i<buttons.length; i++){
        let redRandom = Math.round(Math.random()*255);
        let greenRandom = Math.round(Math.random()*255);
        let blueRandom = Math.round(Math.random()*255);

        setColor(buttons[i],redRandom,greenRandom,blueRandom);
        if(i === answerButton) {
            heading.innerHTML = `(${redRandom},${greenRandom},${blueRandom})`;
        }
        
        buttons[i].addEventListener('click',function(){
            this === buttons[answerButton] ? answerMessage.innerHTML = "Correct!" : answerMessage.innerHTML ="wrong Answer! Guess Again!"; 
        })
        }
}

startGame();
document.getElementById('resetButton').addEventListener('click', startGame);