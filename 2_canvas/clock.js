class Point {
    /**
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} radius 
     * @param {number} angle 
     * @returns {Point}
     */
    static fromAngle(x, y, radius, angle) {
        return new Point(
            x + Math.cos(angle) * radius, 
            y + Math.sin(angle) * radius
        );
    }
}

/** @type {HTMLCanvasElement} */
const clock = document.querySelector('#clock');
const context = clock.getContext('2d');

const canvasWidth = clock.width;
const canvasHeight = clock.height;
const clockRadius = canvasWidth * 0.4;
const centerPoint = new Point(canvasWidth / 2, canvasHeight / 2);

context.beginPath();
context.arc(centerPoint.x, centerPoint.y, clockRadius, 0, Math.PI * 2);

context.moveTo(centerPoint.x, centerPoint.y);

const p = Point.fromAngle(centerPoint.x, centerPoint.y, clockRadius, 0);
context.lineTo(p.x, p.y);

context.moveTo(100, 100);
context.lineTo(100, 200);
context.arcTo(200, 200, 200, 100, 100);

context.strokeStyle = 'black';
context.stroke();