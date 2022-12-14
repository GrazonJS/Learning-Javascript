// ---DOM MAINPULATION---
   
console.log('hello')

let title = document.getElementById ('title')
console.log(title.innerText)


let result = 'this is the new text'
title.innerText = result   

title.innerHTML = '<p>HELLO</p>' // this changes the h2 tag to p tag NOTE: '.innerHTML'

