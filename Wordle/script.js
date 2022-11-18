var words =[
    "dream",
    "guard",
    "flood",
    "adult",
    "sight",
    "alarm",
    "force",
    "wound",
    "brave",
    "cable",
    "panic",
   "study",
    "faith",
    "equal",
    "grade",
    "award",
    "bully",
    "voice",
    "drive",
    "title",
]
const buttonElements=document.querySelectorAll('button');
let row=1;
let letter=1;
let gameOver=false;
let guessedCorrectly=false;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// const wordForTheDay='shout';
let index1=getRandomInt(0,19);
console.log(index1);
 const wordForTheDay=words[index1];
const wordElements=document.querySelectorAll('.word-row');

buttonElements.forEach((element)=>{
   element.addEventListener('click',function(){
    keypress(element.attributes["data-key"].value) ;
   } )
});
function populateWord(key){
    if( letter<6 ){
        wordElements[row-1].querySelectorAll('.word')[letter-1].innerText = key;
        letter+=1;
    }
   
   
}
function checkWord(){
   const letterElements= wordElements[row-1].querySelectorAll('.word');
   let numofCorrectAphabets=0;
    letterElements.forEach((element,index)=>{
    const indexOfLettersInWordOfTheDay=wordForTheDay.toLocaleLowerCase().indexOf(element.innerHTML.toLocaleLowerCase());
   if(indexOfLettersInWordOfTheDay===index){
     element.classList.add('word-green');
     numofCorrectAphabets+=1;
   }
   else if(indexOfLettersInWordOfTheDay > 0){
       element.classList.add('word-yellow');
   }else{
    element.classList.add('word-grey');
   }

                  
   })
   if(numofCorrectAphabets===5){
    gameOver=true;
    guessedCorrectly=true;
    alert("Congratualtions! You have guesses the word for the day");
   }else if(row==6){
     gameOver=true;
     alert("Better luck next time... The word was:" +wordForTheDay)
   }

}
function enterWord(){
    if(letter<6){
        alert("Not enough letters")
    }
    else{
        checkWord();
        row+=1;
        letter=1;
    }
}
function deleteLetter(){
    const letterElement=wordElements[row-1].querySelectorAll('.word');
    for(let index=letterElement.length-1;index>=0;index--){
        const element=letterElement[index];
        if(element.innerText!==''){
            element.innerText='';
            letter-=1;
            break;
        }
    }
}
function keypress(key)
{  if(!gameOver){
    if(key.toLowerCase()=== 'enter'){
        enterWord();

    }
    else if(key.toLowerCase()==='del'){
      deleteLetter();
    }
    else{
      populateWord(key);
    }
   }else{
     alert('Game over! please play again tomorrow and guess a new word');
   }
   

   
      
  
}