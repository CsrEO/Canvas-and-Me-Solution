/**
 * @type{HTMLCanvasElement}
 */

const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let x = 0;
let y = 0;

/**
 * 
 * @param {MouseEvent} event 
 */

function draw (event){
    ctx.fillRect(x, y, 5, 5);
}


canvas.addEventListener("mousemove", e => {
    if (isDrawing === true) {
        x = e.offsetX
        y = e.offsetY
        draw()
    }
});
 
canvas.addEventListener("mousedown", e =>{
    isDrawing = true;
});

canvas.addEventListener("mouseup", e => {
    isDrawing = false;
});
