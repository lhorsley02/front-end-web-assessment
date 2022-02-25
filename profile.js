console.log("Profile Connected")

let colorButton = document.getElementById('color')
let placeButton = document.getElementById('place')
let ritualButton = document.getElementById('ritual')

function colorBtn (event) {
    alert('My favorite color is green')
}

function placeBtn (event) {
    alert('My favorite place is Oregon')
}

function ritualBtn (event) {
    alert('My favorite ritual is feeding and caring for my horses in the morning')
}

colorButton.addEventListener("click", colorBtn)

placeButton.addEventListener("click", placeBtn)

ritualButton.addEventListener("click", ritualBtn)