/** @type {HTMLCanvasElement} */
const patternSource = document.querySelector('#pattern-source')
const avatar = document.querySelector('#avatar')

function createPatternSource() {
    const context = patternSource.getContext('2d')
    context.drawImage(avatar, 0, 0, 50, 50)
}

createPatternSource()

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#drawing')
const context = canvas.getContext('2d')

const pattern = context.createPattern(patternSource, 'repeat')

context.fillStyle = pattern
context.fillRect(0, 0, 400, 400)

const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
const data = imageData.data

for (let i = 0; i < data.length; i += 4) {
    const red = data[i]
    const green = data[i + 1]
    const blue = data[i + 2]
    const alpha = data[i + 3]

    const average = Math.floor((red + green + blue) / 3)

    data[i] = average
    data[i+1] = average
    data[i+2] = average
}

imageData.data = data
context.putImageData(imageData, 0, 0)