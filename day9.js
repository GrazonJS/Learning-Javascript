//PROMISES
   /*a concept of synchronous programming 
    */

const waitingForSoup = () => console.log('soup')

setTimeout(waitingForSoup,2000)
//2000 refers 2seconds of delay

const promise1 = new Promise ((resolve, reject) => {
    setTimeout(() =>{
        isReady = true

        //setting it random 
        isReady = [true,false][Math.floor(Math.random()*2)]
        isReady ? resolve('soup ready'): reject('no soup')
    },2000)
    //we used a ternary operator here
})

console.log(
    promise1
    .then(sucess => console.log({sucess}))
    .catch (error => console.log({error}))
    )

    console.log('fetch':
    fetch('HTTPS://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data))
    )