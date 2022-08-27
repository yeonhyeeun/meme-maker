const canvas = document.querySelector("canvas");
// 붓 contex
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height= 800; 

// x,y,width,heighy : 4argmument of fillRect func 
ctx.moveTo(50,50); 
ctx.lineTo(150,50); 
ctx.lineTo(150,150); 
ctx.lineTo(50,150); 
ctx.lineTo(50,50); 

ctx.fill();
