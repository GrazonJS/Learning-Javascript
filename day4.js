// THIS IS ABOUT HIGHER ORDER FUNCTIONS
              /*
.map()
.filter()
.reduce()     */

//MAP

 [1,2,3,4,5,6].map(number => console.log(number))

     //.map() is basically a looping function
     //loops and returns an array
     //each array gets passed to 'number'

let result = [1,2,3,4,5,6].map(number => number * 2)
console.log(result)

//FILTER

let result2 = [1,2,3,4,5,6].filter(number => number > 2)
console.log(result2)

     //.filter loops and returns an array based onthe given conditions

     