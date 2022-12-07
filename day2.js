// TOPICS: arrays

const brand = [apple, honor,redmi,samsung,dell]
console.log(brand[0])  //prints apple
 

//adding a new element to the array 
brand.push(asus)
console.log(brand)

//selecting the elements to consider and remves the rest of em 
brand.slice(0,3)  // uses index and doesnt consider the 3rd value
console.log(brand)

//getting the Index value 
brand.indexOf (asus)
console.log(brand)

// geting the number of elements present in an array
console.log(brand.length)

//using Objects (AKA dictionaries in phython)
const person = {
    name: 'john doe',
    age : 12,
    shirt : 'white'
}

//dot notation 
console.log(person.name)
console.log(person.age)
person.job = 'manager'

//bracket notation 
console.log(person['name'])
console.log(person['age'])
person['address'] = 'tamil nadu'


const indtroducer = (name,shirt) =>{
    const person = {
        name : name ,
        shirt : shirt
    }
       `this is the name and age of the person ${person.name} ${person.shirt}`
}

console.log(indtroducer('joe','black'))//calling a function 

//getting a bit advanced in objects using methods


const person2 = {
    name: 'joe doe',
    age : 15,
    asserts : 100000 , 
    liabilities : 200000  ,
    netWorth : function(){
        this.asserts - this.liabilities
    }
}

const intro = `this is a text for the person2 and calling the values ${person2.age}  
and ${person2.netWorth()} NOTE: that networth is a function now not a property`

// FOR LOOPS

for (let i=0; i<fruits.length; i++){    //Old way kinda outdated
    console.log(fruits[i])
}


for (let fruit of fruits){        //New way also looks much better 
    console.log(fruit)
}

//Creating a new array with twice the values of the given array

let given = [2,5,7,3,6,1,4,2,,4,8]
let result = []   //empty array

for (let i of given){        
    result.push(i*2)
}
console.log(result)

//Doing that same thing using loops with arrow function 

let newGiven = (given) =>{
    let result =[]

    for (i of given){
        result.push(i*2)
    }
    return result;
}

console.log(newGiven(1,2,3,4,5,6,7,8,9));