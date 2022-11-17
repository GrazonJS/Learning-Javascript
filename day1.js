// this is a master class about javascript

//it starts from scratch levels 

// variables declarations const,let,var ;
// it is good to use const for immuntable and let for mutable, var is not prefered 
 
 let name = 'India is a great country'
 console.log (name)  //prints  the name 
// value=prompt(' this is how we ask a question in JS')
value1 = number(prompt('this number function will convert it into intergers'))

 //Operators 
 a= 10
 b = 24 
 console.log(a*b)

 /* Data Types 
      numbers = 2,10000,-4,4.3
      strings = 'loving JS', "crashing JS"
      arrays = [] linear homogenous datatype
      boolean = true r false 
      objects = {} similar to dictionaries in python
 */

/* Math methods
       Math.floor() = rounds down(example)=>{12.42 = 12}
       Math.ceil() = rounds up(example)=>{12.42 = 13}
       Math.random() = picks a random number b/w 0 and 1 (example)=>{
        Math.random()*3 (picks b/w 0 to 3)
       }
*/
 
//conditional operators = checkout conditionalOperator.png

if (a==b){
    console.log('this is not the expected one')
}
else{
    console.log('this is the expected one')
}

//Functions 

function sampleCheck(){   //defining a function 
    console.log('this is an explicit function')
}
sampleCheck()    // calling that function when required

function sampleCheck1(parameterPass){
    console.log(parameterPass)
}
sampleCheck1('this is a function with a parameter passed')  //calling that function 


  // litoral templates - it makes string convictions much easier
    a= 'graceshon'
    let newVariable = 'hey'+ a + ' this is me' //this is a normal code 
    let newVariable1 = `hey ${a} this is me`  //this is using litoral templates
 
// ES6 arrow functions   
     /*syntax:
          let/const functionName = (parameters)=> {
            ---logical part---
            return value
          }
     */
const sumArrow = (a,b)=> a+b   //fancy way without {} 

console.log(sumArrow(10,20))   // calling the function 