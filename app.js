let powerBtn = document.querySelector(".on-off");
let btnFrame = document.querySelector(".buttonSlider");
let powerBtnText = document.querySelector(".btn-text");
let start = false;

powerBtn.addEventListener("click" , onOff)

function onOff(){
    if(start)
    start = false;
    else
    start = true;

    powerBtn.classList.toggle("On");
    btnFrame.classList.toggle('sliderOn');

    if(start)
    {
        powerBtnText.innerText = "ON";
    }
    else
        powerBtnText.innerText = "OFF";
}



document.addEventListener("keypress", (e) => {
    // console.log(e.key);
    keyMusic(e.key);
})

function keyMusic(alpha)
{   let num;

    if( alpha == "q" || alpha == "Q")
    num=0;
    else if( alpha == "w" || alpha == "W")
    num=1;
    else if( alpha == "e" || alpha == "E")
    num=2;
    else if( alpha == "r" || alpha == "R")
    num=3;
    else if( alpha == "t" || alpha == "T")
    num=4;
    else if( alpha == "y" || alpha == "Y")
    num=5;
    else if( alpha == "u" || alpha == "U")
    num=6;
    else if( alpha == "i" || alpha == "I")
    num=7;
    else if( alpha == "o" || alpha == "O")
    num=8;
    else if( alpha == "p" || alpha == "P")
    num=10;
    else if( alpha == "a" || alpha == "A")
    num=11;
    else if( alpha == "s" || alpha == "S")
    num=12;
    else if( alpha == "d" || alpha == "D")
    num=13;
    else if( alpha == "f" || alpha == "F")
    num=14;
    else if( alpha == "g" || alpha == "G")
    num=15;
    else if( alpha == "h" || alpha == "H")
    num=16;
    else if( alpha == "j" || alpha == "J")
    num=17;
    else if( alpha == "k" || alpha == "K")
    num=18;
    else if( alpha == "l" || alpha == "L")
    num=19;
    else if( alpha == "c" || alpha == "C")
    num=20;
    else if( alpha == "v" || alpha == "V")
    num=21;
    else if( alpha == "b" || alpha == "B")
    num=22;
    else if( alpha == "n" || alpha == "N")
    num=23;
    else if( alpha == "Enter")
    onOff();

     while(num<=23)
     {
         playSound(num);
         break; 
     }
}


let key = document.querySelectorAll(".key");
// console.log(whiteKey.length);

for(let i=0 ; i<key.length ; i++)
{
    item = document.querySelectorAll('.key')[i];
    item.addEventListener("click" , function (){

        playSound(i);

    })
}

function playSound(i)
{
    if(start)
        { 
          music(i);
          buttonAnimation(i,key);
        }
        else{
            btnFrame.classList.toggle('Off')
            setTimeout(() => {
                btnFrame.classList.toggle('Off')
                
            }, 200);
        }
}


function music(key){

    if(key<8)
   {
       var audio = new Audio("sounds/A" + key + ".mp3");
       audio.play();
   }

   else if(key >= 8 && key < 16)
   {  
       key = key - 8;
       var audio = new Audio("sounds/B" + key + ".mp3");
       audio.play();
   }
   else if(key >= 16 && key < 24)
   {  
       key = key - 16;
       var audio = new Audio("sounds/C" + key + ".mp3");
       audio.play();
   }
}

function buttonAnimation(btn){
    
    if(key[btn].classList.contains('white-key'))
    {
        key[btn].classList.add("active-whitekey");
        setTimeout(function(){
         key[btn].classList.remove("active-whitekey");
        },50)
    }
    else if(key[btn].classList.contains('black-key'))
    {
        key[btn].classList.add("active-blackkey");
        setTimeout(function(){
            key[btn].classList.remove("active-blackkey");
        },50)
        }

    // console.log(key[btn].classList.contains('white-key'));
}


// autoplay

const autoPlay = document.querySelector(".auto-play");
const stopPlay = document.querySelector(".stop-play");
let play = false;

autoPlay.addEventListener("click" , () => {

        let m = setInterval(() => {
    
        let randomKey = Math.floor(Math.random()*25);
        if(start)
        playSound(randomKey);

        stopPlay.addEventListener("click", () => {
            clearInterval(m);
        })
        }, 200);

})




   


