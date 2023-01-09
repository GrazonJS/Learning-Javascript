class Bank {
    constructor (balance){
        this.balance = balance
    }
    withdraw(amount){
        if (this.balance - amount < 0){
            console.log('sorry your balance is not sufficient');

            return
        }

        this.balance -= amount
        console.log('withdrew', `$${amount}`)
      console.log({balance: this.balance})
     }
    deposit(amount){
        this.balance += amount
        console.log('deposit', `$${amount}`)
      console.log({balance: this.balance})
    }
}

const person1  = new Bank(0)

const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')
const balanceDiv = document.getElementById('balance')

depositButton.onclick = () => {
    const amount = Number(amountInput.value) 
    person1.deposit(amount)
    balanceDiv.innerText = `Balance :${person1.balance}`
}

withdrawButton.onclick = () => {
    const amount = Number(amountInput.value)
    person1.withdraw(amount)
    balanceDiv.innerText = `Balance: ${person1.balance}`
  }