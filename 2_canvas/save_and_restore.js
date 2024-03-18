/** @type {HTMLCanvasElement} */
const drawing = document.querySelector('#drawing')
const context = drawing.getContext('2d')

context.shadowBlur = 20
context.shadowColor = 'rgba(0, 0, 0, .5)'

context.fillStyle = 'red'
context.save()

context.fillStyle = 'green'
context.shadowColor = 'yellow'
context.translate(100, 100)
context.save()

context.fillStyle = 'blue'
context.shadowColor = 'purple'
context.fillRect(0, 0, 100, 100)

context.restore()
context.fillRect(10, 10, 100, 100)

context.restore()
context.fillRect(0, 0, 100, 100)