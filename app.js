const canvas = document.querySelector("canvas");
// 붓 contex
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height= 800; 

// x,y,width,heighy : 4argmument of fillRect func 
ctx.fillRect(200,200,50,200); 
ctx.fillRect(400,200,50,200); 
//ctx.lineWidth = 2; 
//ctx.strokeRect(300,300,50,100); 
ctx.fillRect(300,300,50,100); 
//지붕 덮개 
ctx.fillRect(200,200,250,20); 
//지붕 삼각형 
ctx.fillStyle = "tomato";
ctx.moveTo(200,200); 
ctx.lineTo(325,100);
ctx.lineTo(450,200);
ctx.fill();
