const button = document.getElementById("startButton")
const result = document.getElementById("result")

const houses = [
"Gryffindor",
"Slytherin",
"Ravenclaw",
"Hufflepuff"
]

button.addEventListener("click", startCeremony)

function speak(text){

const speech = new SpeechSynthesisUtterance(text)

speech.rate = 0.9
speech.pitch = 0.8

speechSynthesis.speak(speech)

}

function startCeremony(){

result.innerText = "Speak your name..."

speak("Step forward and tell me your name.")

startListening()

}

function startListening(){

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition

if(!SpeechRecognition){

result.innerText = "Voice magic not supported."
return

}

const recognition = new SpeechRecognition()

recognition.lang = "en-US"

recognition.start()

recognition.onresult = function(event){

let name = event.results[0][0].transcript

result.innerText = name + " approaches the Sorting Hat..."

speak(name + "... come closer.")

setTimeout(()=>{

thinkingPhase(name)

},3000)

}

}

function thinkingPhase(name){

result.innerText = "The Sorting Hat is thinking..."

speak("Hmm... difficult... very difficult.")

setTimeout(()=>{

sortStudent(name)

},4000)

}

function sortStudent(name){

const house = houses[Math.floor(Math.random() * houses.length)]

result.innerText =
name.toUpperCase() + "... " + house.toUpperCase() + "!"

speak(name + "... you belong in " + house)

changeHouseColor(house)

}

function changeHouseColor(house){

if(house === "Gryffindor") result.style.color = "#ae0001"
if(house === "Slytherin") result.style.color = "#2a623d"
if(house === "Ravenclaw") result.style.color = "#222f5b"
if(house === "Hufflepuff") result.style.color = "#ecb939"

}
