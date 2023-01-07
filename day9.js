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
        isReady = [true,ffalse][Math.floor(Math.random()*2)]
        isReady ? resolve('soup ready'): reject('no soup')
    },2000)
    //we used a ternary operator here
})

console.log(
    promise1
    .then(sucess => console.log({sucess}))
    .catch (error => console.log({error}))
    )

    console.log('fetch :',
    fetch('HTTPS://dog.ceo/api/breeds/image/random') //=> 1st promise
    .then(response => response.json()) //=>2nd promise
    .then(data => console.log(data))
    )

// From here we are going to do this in the ES6 way

const getDog = async () => {
    //async makes the following code as asynchronous

    const url = 'HTTPS://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    //await - it is the other way of .then 
    //to use await you need to declare the function as async

    const data = await response.json()
    console.log(data);
}

//CREATING A PROGRAM BASED ON THE EXPERIENCE OF THE HOTEL ON ODERING A SOUP

const getSoup = async () =>{
    const data = {
        rating :0,
        tip:0,
        pay:0,
        review:0
    }
    try {
        const soup = await promise1 //=>promise1 is already defined in line 10
        console.log(soup);
        data.rating = 5
        data.tip = .2
        data.pay = 10
        data.review = 5
        return data
        
    } catch (error) {
        console.log(error)
        data.rating = 1
        data.tip = 0
        data.pay = 0
        data.review = 1
        return data
    }
}

getSoup().then(value => console.log(value))

