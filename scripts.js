// variables assigned to doc's element
const widthInput = document.getElementById('widthInput')
const widthDisplay = document.getElementById('widthDisplay')

const heightInput = document.getElementById('heightInput')
const heightDisplay = document.getElementById('heightDisplay')

const colorInput = document.getElementById('colorInput')
const colorDisplay = document.getElementById('colorDisplay')

const blob = document.getElementById('colorBlob')   

// placeholders for page refresh
widthInput.value = 100
widthDisplay.innerHTML = '100px'

heightInput.value = 100
heightDisplay.innerHTML = '100px'

colorInput.value = '#000000'
colorDisplay.innerHTML = '#000000'

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
    widthDisplay.innerHTML = `${widthInput.value}px`
    heightDisplay.innerHTML = `${heightInput.value}px`
    colorDisplay.innerHTML = `${colorInput.value}`
    // colorBlob.innerHTML = `${colorInput.value}`
}