// ---DOM MAINPULATION---
   
console.log('hello')

let title = document.getElementById ('title')
console.log(title.innerText)


let result = 'this is the new text'
title.innerText = result   

title.innerHTML = '<p>HELLO</p>' // this changes the h2 tag to p tag NOTE: '.innerHTML'

//Adding (or) manippulating tags in HTML using JS
 title.style.color='red'

 //Creating rock/paper/scissors game(logical)

 let redDiv = document.getElementById('red')
 let yellowDiv = document.getElementById('yellow')
 let greenDiv = document.getElementById('green')

//.onclick will pass the function when you click on that tag (dom way)

 redDiv.onclick = () => console.log('red')
 yellowDiv.onclick = () => console.log('yellow')
 greenDiv.onclick = () => console.log('green')


 //Using Query selector 
let square = document.querySelectorAll('.color-square')

//Using forEach (looping function)
square.forEach(square => console.log(square.value))

//Doing that .onclick thing using forEach()

square.forEach(square.onclick = () => {
    console.log(square.value)

})

// Increasing the count of the click bassed on the color of the boxes 
const timesClicked = {'red' : 0, 'yellow':0 , 'green':0}
square.forEach(square = () => {
    square.onclick = () =>
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
    
}
     );

// Clearing the values by reseting them 

let clearValues = () => {
    timesClicked[square.value] = 0
    square.forEach(square => square.innerText = 0
         )
}
   
let clearGameBtn = document.getElementById('clearGame')
clearGameBtn.onclick = () => clearValues()