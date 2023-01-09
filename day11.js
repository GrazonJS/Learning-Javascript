/* TOPIC : Classes
           methods
           properties
           */

const nums = [1,2,3]

//CLASS 
class Car {
    constructor (name,color,topSpeed){
      
     //USING THIS WITH PEOPERTIES   
    //this keyword is used to pass the object_name in the place of this 
    this.name = name 
    this.color = color
    this.topSpeed = topSpeed
    this.currentspeed = 0;
} 

// USING A METHOD IN A CLASS
start(){
    console.log('you are good to go');
    this.currentSpeed += 10
    console.log(`the driving speed is ${this.currentSpeed}`);
}  

zeroToSixty(){
    setTimeout(() => {
        console.log('that was fast')
        this.currentSpeed = 60
        console.log(this.currentSpeed);
    })
}

//getters and setters in JS
getCurrentSpeed(){
    return currentSpeed
}

//setting a default arguement 
drive(speed = 10){
//the value of speed is passed in but in case if there is no value then it set the default value as 10

    this.currentSpeed += speed
    console.log(`driving speed ${this.currentSpeed} km/h`);
}
}
const mclaren = new Car ('mclaren720s','orange',300)
console.log(mclaren.name)
console.log(mclaren.currentspeed)
console.log(mclaren.topSpeed)
//it takes name as mclaren720s
mclaren.start()
mclaren.zeroToSixty()

//calling drive() 2 times from line 41
mclaren.drive(40)
mclaren.drive(80)
console.log(mclaren.currentSpeed);
//in the console the value will be 120 as both the value gets added

//ARRAY

//creating our own method for array
Array.prototype.newPush = function(item){
    return this.length
}

const new1 = [12,15,42,53,68,34,27]
console.log(new1.myPush('cookie'));