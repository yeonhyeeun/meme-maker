const canvas = document.querySelector("canvas");
// 붓 contex
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height= 800; 

//집 만들기 
    // // x,y,width,heighy : 4argmument of fillRect func 
    // ctx.fillRect(200,200,50,200); 
    // ctx.fillRect(400,200,50,200); 
    // //ctx.lineWidth = 2; 
    // //ctx.strokeRect(300,300,50,100); 
    // ctx.fillRect(300,300,50,100); 
    // //지붕 덮개 
    // ctx.fillRect(200,200,250,20); 
    // //지붕 삼각형 
    // ctx.fillStyle = "tomato";
    // ctx.moveTo(200,200); 
    // ctx.lineTo(325,100);
    // ctx.lineTo(450,200);
    // ctx.fill();

//사람 만들기 
//팔 두쪽 
ctx.fillRect(210,200,15,100)
ctx.fillRect(350,200,15,100)

//몸통 
ctx.fillRect(260,200,60,200)

//얼굴 
ctx.arc(290, 150, 30, 0, 2 * Math.PI); 
ctx.fill();

//눈 
ctx.beginPath();
ctx.fillStyle = "tomato";
ctx.arc(275, 140, 5,  Math.PI, 2 * Math.PI); //left eye
ctx.arc(305, 140, 5,  Math.PI, 2 * Math.PI); //right eye
ctx.fill();
