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

result.style.opacity = 1
result.innerText = "Speak your name..."

startListening()

}

function startListening(){

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition

if(!SpeechRecognition){

result.innerText = "Voice magic not supported in this browser."
return

}

const recognition = new SpeechRecognition()

recognition.lang = "en-US"
recognition.interimResults = false
recognition.maxAlternatives = 1

recognition.start()

recognition.onresult = function(event){

let transcript = event.results[0][0].transcript.toLowerCase()

console.log("Student name:", transcript)

result.innerText = transcript + " approaches the Sorting Hat..."

setTimeout(()=>{

sortStudent(transcript)

},3000)

}

}

function sortStudent(name){

result.innerText = "The Sorting Hat is thinking..."

setTimeout(()=>{

const house = houses[Math.floor(Math.random() * houses.length)]

result.innerText = name.toUpperCase() + "... " + house.toUpperCase() + "!"

result.classList.add("house")

changeHouseColor(house)

},3000)

}

function changeHouseColor(house){

if(house === "Gryffindor"){

result.style.color = "#ae0001"

}

if(house === "Slytherin"){

result.style.color = "#2a623d"

}

if(house === "Ravenclaw"){

result.style.color = "#222f5b"

}

if(house === "Hufflepuff"){

result.style.color = "#ecb939"

}

}
