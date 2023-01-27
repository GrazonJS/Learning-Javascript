// WHILE LOOPS || add EventListerner || <audio> Tags

//while loops 
let n = 0

while (n<5){
    console.log("looping",n);
    n++
}

//addEventListener() - its a method

let play = document.getElementById('play')

play.addEventListener('click',function(){
    console.log('hello world');
})


//here document refers as a whole of HTML  
document.addEventListener('keyword',fuction (e){
    //keyword is an event and "e" is the event listener

    if(e.key == "q") {
        console.log('you pressed q');
        document.getElementById('punch').play()
    }else {
        console.log('that is not q');
    }
})
 
//<audio> Tags

//sample HTML page 
  /*<Audio src="sounds/hit.wav"
        style ="display: none"
        type ="audio/mpeg"
        id = "punch">
        </Audio> */

 //checkout line 26

 if (condition) {
    
 } else {
    
 }