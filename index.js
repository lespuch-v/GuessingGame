const userWrongChoices = document.getElementById("choices")
const btn = document.getElementById("btn")
const msg = document.getElementById("outputMSG")
let userInput = document.getElementById("playerNumber")
let numOfTries = document.getElementById("tries")
let count = 0
numOfTries.textContent = count

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100)
}
const rnd = getRandomNumber()

btn.addEventListener("click", () => {

    if(parseInt(userInput.value) == rnd){
        msg.textContent = "That right you got it!"
        console.log("Yes thats right you got it. ")
    }else if (parseInt(userInput.value) > rnd){
        msg.textContent = "To HIGH!"
        userWrongChoices.textContent += `${userInput.value}, `
        count++
        numOfTries.textContent = count
    }else if(parseInt(userInput.value) < rnd){
        msg.textContent = "To LOW!"
        userWrongChoices.textContent += `${userInput.value}, `
        numOfTries.textContent = count
        count++
        
    }
})

// Create a function that generates a number from 0 - 100

