// variables assigned to doc's element
const widthInput = document.getElementById('widthInput')
const widthDisplay = document.getElementById('widthDisplay')

const heightInput = document.getElementById('heightInput')
const heightDisplay = document.getElementById('heightDisplay')

const colorInput = document.getElementById('colorInput')
const colorDisplay = document.getElementById('colorDisplay')

const blob = document.getElementById('colorBlob')

// placeholders for page refresh
widthDisplay.innerHTML = 100
heightDisplay.innerHTML = 100
colorDisplay.innerHTML = "#000000"

// color blob on bottom right
// blob.style.width = `${widthInput.value}`
// blob.style.height = `${heightInput.value}`
// blob.style.backgroundColor = `${colorInput.value}`

// event listeners
widthInput.addEventListener('input', update)
heightInput.addEventListener('input', update)
colorInput.addEventListener('input', update)

// update to inputs
function update(e) {
    widthDisplay.innerHTML = `${widthInput.value}`
    heightDisplay.innerHTML = `${heightInput.value}`
    colorDisplay.innerHTML = `${colorInput.value}`
    // colorBlob.innerHTML = `${colorInput.value}`
}