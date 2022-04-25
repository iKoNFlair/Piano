

let powerBtn = document.querySelector(".on-off");
let btnFrame = document.querySelector(".buttonSlider");
let powerBtnText = document.querySelector(".btn-text");
let start = false;

powerBtn.addEventListener("click" , function(){
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

})


let whiteKey = document.querySelectorAll(".white-key");
// console.log(whiteKey.length);
for(let i=0 ; i<whiteKey.length ; i++)
{
    item = document.querySelectorAll('.white-key')[i];
    item.addEventListener("click" , function(){

        if(start)
        { music(i);
        buttonAnimation(i);
        }
        else{
            btnFrame.classList.toggle('Off')
            setTimeout(() => {
                btnFrame.classList.toggle('Off')
                
            }, 200);
        }
        // console.log(item);

    })
}

function music(key){

    if(key<7)
   {
       var audio = new Audio("sounds/A" + key + ".mp3");
       audio.play();
   }

   else if(key >= 7 && key < 14)
   {  
       key = key - 7;
       console.log(key);
       var audio = new Audio("sounds/B" + key + ".mp3");
       audio.play();
   }
   else if(key==14)
   {  
    key = 0;
    var audio = new Audio("sounds/Bb" + key + ".mp3");
    audio.play();
   }


}

function buttonAnimation(btn){

    whiteKey[btn].classList.add("active-key");
    setTimeout(function(){
        whiteKey[btn].classList.remove("active-key");
    })

}
