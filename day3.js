//GETTING ADVANCED WITH ARRAY AND OBJECTS

let array = ['stack','queue','linkedlist','tree','graph']

/*the keyword 'of' denotes the value in each array 
   every time the value of 'element' becomes 
     stack 
     queue
     linkedlist 
     tree 
     graph */
for (const element of array){
    console.log(element)
}

/*the keyword 'in' denotes the index of each array 
   every time the value of 'element' becomes 
     0 
     1
     2 
     3 
     4 */
     for (const element in array){
        console.log(element)
    }

     //Program to count the number of letters in a sentence

     const howManyLetters = ()=>{
        const sentence = 'India is my country all indians '

        let resultNumber = 0

        for (index in sentence){
            console.log(Number(index)+1)        //the keyword 'Number' is used to typecast(convert) string to numbers
            result =(Number(index)+1) 
        }
        return {result}  // this curly braces will help to print the word 'result' as well as its value 
     }
     console.log(howmanyNumber());


     //Program for counting the letters and its frequency 

     const letterFrequency = (phrase)=>{
        let eachLetter = {}

        for (index of phrase){
            if (eachLetter.index == 0){
                eachLetter.index = 1
            }
            else{
                eachLetter.index = eachLetter.index +1
            }
        }
        return {eachLetter}
     }

     let sentence = 'hello world this is india'
     console.log(letterFrequency(sentence))