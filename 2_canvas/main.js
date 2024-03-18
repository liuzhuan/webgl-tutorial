/** @type {HTMLCanvasElement} */
let drawing = document.getElementById('drawing')

if (drawing.getContext) {
    let context = drawing.getContext('2d');

    context.fillStyle = '#ff0000';
    context.fillRect(10, 10, 50, 50);

    context.fillStyle = 'rgba(0, 0, 255, .5)'
    context.fillRect(30, 30, 50, 50);

    context.clearRect(40, 40, 10, 10);

    context.strokeStyle = '#ff0000';
    context.lineWidth = 4;
    context.strokeRect(100, 10, 50, 50);

    context.strokeStyle = 'rgba(0, 0, 255, 0.5)';
    context.lineWidth = 8;
    context.strokeRect(120, 30, 50, 50);

    let imgURI = drawing.toDataURL("image/png");

    let image = document.createElement('img');
    image.src = imgURI;
    image.alt = 'canvas';
    document.body.appendChild(image);
}
