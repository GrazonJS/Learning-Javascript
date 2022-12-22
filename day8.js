  // API

  /*  ---CONCEPTS---
  we use api to get some info that we need from other databases 
  meaning we dont need do all those (calculation/coding part) 
  by ourselves

   it follows a method of asynchronous programming 
   (meaning just like the previous codes it does not execute line by line)

    */

const randomDogDiv = document.getElementById('random-dog-image')
const button = document.getElementById('button')

console.log('the first block');
const generate = () => {

fetch('https://dog.ceo/api/breeds/image/random')
 .then(response => response.json())
 .then(json => {
    randomDogDiv.innerHTML = `<img src='${json.message}'>`
 })
}
 console.log('the third block');

 button.onclick = () =>{
    generate()
 }