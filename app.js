const canvas = document.querySelector("canvas");
// 붓 contex
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height= 800; 

// x,y,width,heighy : 4argmument of fillRect func 
ctx.rect(50, 50, 100, 100); 
ctx.rect(150, 150, 100, 100); 
ctx.rect(250, 250, 100, 100); 
ctx.fill();
//rect 사각형 그리기 선으로 
//fill 그린거 채우기 
//여기까지 모두 같은 경로 

//아래부터 새 경로 지정 - 이전 경로와 빠이 
ctx.beginPath();
ctx.rect(350, 350, 100, 100); 
ctx.fillStyle = "tomato";   //color 
ctx.fill();  
//중간에라도 색을 개별로 지정하고 싶으면 무조건 beginPath하기 path는 쭉 이어지는게 default 
ctx.beginPath(); 
ctx.rect(450, 450, 100, 100); 
ctx.fillStyle = "blue";   //color 
ctx.fill();  