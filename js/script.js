var canvas;
var canvasContext;
var ballX = 50

window.onload = function() {
    
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    drawEverything();
    drawEverything();
    drawEverything();
}

function drawEverything() {
    console.log('Welcome to Hustle Gaming');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(225, 230, 200, 200);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(ballX, 200, 50, 25);
}