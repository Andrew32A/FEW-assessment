// variables assigned to doc's element
const widthInput = document.getElementById('widthInput')
const widthDisplay = document.getElementById('widthDisplay')

const heightInput = document.getElementById('heightInput')
const heightDisplay = document.getElementById('heightDisplay')

const colorInput = document.getElementById('colorInput')
const colorDisplay = document.getElementById('colorDisplay')

const colorBlob = document.getElementById('colorBlob')

// event listeners
widthInput.addEventListener('input', update)
heightInput.addEventListener('input', update);
colorInput.addEventListener('input', update);

// update to inputs
function update(e) {
    widthDisplay.innerHTML = `${widthInput.value}`
    heightDisplay.innerHTML = `${heightInput.value}`
    colorDisplay.innerHTML = `${colorInput.value}`
}