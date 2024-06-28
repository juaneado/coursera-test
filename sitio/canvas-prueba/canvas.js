console.log("canvas.js loaded")

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x = 0
let y = 0


function draw() {

   
      //const ctx = canvas.getContext("2d");
      // ctx.beginPath();
      ctx.fillRect(25, 25, 100, 100);
      //ctx.clearRect(x, y, ctx.with, ctx.height);
      //ctx.strokeRect(50, 50, 50, 50);
    
  }
  function moverDerecha() {
    ctx.x = ctx.x + 5 
    draw()
    
}