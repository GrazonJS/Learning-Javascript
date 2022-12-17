// THIS IS A TIP CALCULATOR APP 


//first GET total bill amount
let billTotalInputDiv = document.getElementById('billTotalInput')

//then, GET the tip amount , 
let tipInputDiv = document.getElementById('tipInput')

//now, GET the no of people 
let numberOfPeopleDiv = document.getElementById('numberOfPeople')

//here the calculation occurs and POST 
let perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {

     let totalbill = Number(billTotalInputDiv.value)
     let tipPercentage = Number(tipInputDiv.value)/100

     const totalTip = totalbill * tipPercentage

     const total = totalTip + totalbill

     const perPersonTotal = total/ numberOfPeople 
     
     perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

// .toFixed() is used to declare how many number of decimals value  
    }


const increasePeople  = () => {

     numberOfPeople += 1
     numberOfPeopleDiv.innerText = numberOfPeople
     calculateBill()
}

const decreasePeople = () => {
    
    if(numberOfPeople <= 1){
        return
        /* this is a gaurd function which basically means that 
        the decreasePeople() will get returned with no value if 
        its true. Else, it goes down that is numberOfPeople */ 
    }
    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}