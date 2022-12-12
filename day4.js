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


//REDUCE

let result3 = [1,2,3,4].reduce((prev, curr) => prev+curr,0 ) 
console.log(result3)
    //Need to do sum then use reduce
    //here it adds the previous and current values  causing an accumulation 
    /* like 1+2 becomes 3 
       3+3 becomes 6
       6+4 becomes 10
       i uused 0 at the end which denotes the initial values to start the operation */

actors.reduce((prev,curr)=> prev + curr.networth,0)
       
      