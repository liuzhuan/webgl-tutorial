/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#drawing')
const context = canvas.getContext('2d')

const gradient = context.createLinearGradient(30, 30, 70, 70)
gradient.addColorStop(0, 'white')
gradient.addColorStop(1, 'black')

context.fillStyle = gradient
context.fillRect(30, 30, 80, 80)