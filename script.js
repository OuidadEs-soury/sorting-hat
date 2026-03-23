const button = document.getElementById("startButton")
const result = document.getElementById("result")

const houses = [
"Gryffindor",
"Slytherin",
"Ravenclaw",
"Hufflepuff"
]

button.addEventListener("click", startCeremony)

function startCeremony(){

result.style.opacity = 0
result.innerText = "The Sorting Hat is thinking..."

setTimeout(sortStudent, 3000)

}

function sortStudent(){

const house = houses[Math.floor(Math.random() * houses.length)]

result.innerText = house + "!"

result.classList.add("house")
result.style.opacity = 1

}
