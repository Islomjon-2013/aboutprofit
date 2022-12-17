let text = document.querySelector(`.text`);
let matn = text.innerHTML
    console.log(matn)
    text.innerHTML=''
    let i =0
   function myText(){
    text.innerHTML =text.innerHTML + matn.charAt(i);
    i++
    if(i>matn.length){
        clearInterval(clearStop)
    }
   }
    let clearStop = setInterval(myText,100)