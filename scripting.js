//making some comments in javascript----

console.log('hello world');


//variables in javascript----

var b = 'graceshon';
console.log(b);
var num = 125;
console.log(num);

//DOM manupulation- changing html stuffs with JS------

document.getElementById('sometext').innerHTML= 'this is javascript';

//asking something to an user with prompt

prompt('what\'s your age');
var n1 = prompt('your name');
document.getElementById('name').innerHTML=  n1;

//NUMBERS -----

var n=100;
console.log(n)
console.log(n/10);
var num= n*5;
num += 20;
num--;
console.log(num);

//FUNCTIONS-----

/* 1.create a funtion
   2.call that function */
   
function grace()
{
    console.log('this is a function made by me');
    console.log ('im new to javascript');
}   
grace();

/*getting a value  from the user and adding 
it with your name using functions*/

function value()
{
    var v = prompt('enter a number');
    console.log('india'+v);
}
value();

//function with arguements
function add(num1,num2)
{
   result=num1+num2;
   console.log(result);
}
add(10,25);

//WHILE LOOPS----

var a = 1;
while (a<5)
{
    console.log(a);
    a++;
}

//FOR LOOPS----

for (let i = 0; i < 10; i++)
{
  console.log('this is a for loop');     
}

//DATA TYPES----

let myname = 'graceshon';                  //string
let myage = 18;                            //number
let objname = {first:'JS',last:'Grazon'};  //object(dictionary)
let me = false;                            //boolean
let food = ['apple','orange','banana'];    //array (list)
let random ;                               //undefined
let nothing = null;                        //null value 

 //STRINGS HANDLING -----

 var fruit = 'banana,apple,mango,berry,orange';
 morefruits = 'apple \n banana';
 
 console.log(fruit.length());
 console.log(fruit.indexOf('nan'));
 console.log(fruit.slice(2,6));
 console.log(fruit.replace('ban','123'));n
 console.log(fruit.toUpperCase());
 console.log(fruit.toLowerCase());
 console.log(fruit.charAt());
 console.log(fruit[2]);
 console.log(fruit.split(','));  //split by comma 
 console.log(fruit.split(''));   //split by charector

 //ARRAYS----

let lang = ['php','django','swift','kotlin','typescript'];
let lang1 = new Array ('php','django','swift','kotlin','typescript');
console.log(lang[2]);
lang[3]= 'objective c';

for (let i = 0; i < lang.length; i++) {
   console.log(lang[i]);  
}

console.log('to string',lang.toString());
console.log(lang.join('*'));
console.log(lang.pop(),lang);               // removes the last values of an array
console.log(lang.push('javascript'),lang);  // addds a  new value to an array
console.log(lang[4]); 
lang [lang.length] = 'new language';        // same as push 
console.log(lang);
lang.shift();                               //removes first element from an array
console.log(lang);
lang.unshift('c');                          //adds first element to an array
console.log(lang);

let data = ['sql','mysql','mongodb','jquery'];
let backend = data.concat(lang);  
console.log(backend);
console.log(backend.slice(1,4));
console.log(backend.reverse());
console.log(backend.sort());

let numbers = new Array(1,2,3,9,8,6,4,7);
console.log(numbers.sort(function(a,b) {return a-b}));  //sorting in acending order 
console.log(numbers.sort(function(a,b) {return b-a}));  //sorting in decending order 
  
let emptyarray = new Array ();
for (var ea =0; ea<10 ; ea++);
{
  emptyarray.push(ea);
}
console.log(emptyarray);

  //OBJECTS IN JAVASCRIPT----1


  let info ={
    name:'graceshon',
    initial : 'JS',
    age:18,
    height : 170,
    place : 'kanyakumari',
    myinf0: function () {
      return (this.age+ '\n' + this.initial); 
    }
  };

console.log(info.name);
console.log(info.age);
info.height = '176';     //changes value
console.log(info.height);
info.height++;

//CONDITIONALS----

var one=1;
var two=2;
var three = 3;

//if conditions 

if ((one>two) && (one>three)) {
  console.log("one is big");
}
else if (two>three){
  console.log('two is big');
}
else{
  console.log('three is big ');
}

//switch statements

switch (6) {
  case 0:
    text= 'weekend';
    break;
  case 5:
    text= 'weekend';
    break;
  case 6:
    text= 'weekend';
    break;  
  default:
    text= 'weekday';
    break;
}

console.log(text);

