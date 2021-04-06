//Con esta variable vamos a animar el sol
var jj=550;
//Con esta variable vamos a animar las montañas
var jj2=0;
//Con esta variable vamos a animar el piso
var jj3=0;

//metemos todo en la funcion paisaje, y esta se repetira para siempe, haciendo la animación
function paisaje(){
//aqui voy a hacer mi Paisaje
const MiCanvas=document.getElementById("MiCanvas");
const context= MiCanvas.getContext("2d");
//
//Degradado Fondo
const degradadoLineal = context.createLinearGradient(0,0,500,500);
//Añadir colores Fondo
degradadoLineal.addColorStop(0.1,'#572364');
degradadoLineal.addColorStop(0.5,'blue');
degradadoLineal.addColorStop(0.8,'black');
//Fondo
context.fillStyle = degradadoLineal;
context.fillRect(0,0,500,500);
//Degradado Sol
const degradadoSol = context.createLinearGradient(250,0,250,500);
//Añadir colores Sol
degradadoSol.addColorStop(0,'#FFFF00');
degradadoSol.addColorStop(0.6,'#FF0080');
//Sol
context.fillStyle = degradadoSol;
context.strokeStyle="#0000ff";
context.beginPath();
context.arc(250,jj,200,0,Math.PI*2,true);
context.shadowOffsetX=0;			//Sombra Sol
context.shadowOffsetY=0;			//Sombra Sol
context.shadowBlur=100;				//Sombra Sol
context.shadowColor= 'white';		//Sombra Sol
context.stroke();
context.fill();
	//aca usamos la variable jj para animar el sol
if(jj<-200){
jj=550;
}
jj=jj-1;

context.shadowBlur = 0;	//Desactivar Sombra

//Montañas silueta negra
context.fillStyle = '#000000';
context.strokeStyle="#00ACEE";
context.beginPath();
context.moveTo(0,400);
context.lineTo(0,350);
context.lineTo(60,300);
context.lineTo(100,340);
context.lineTo(150,280);
context.lineTo(200,330);
context.lineTo(260,250);
context.lineTo(320,330);
context.lineTo(370,280);
context.lineTo(420,340);
context.lineTo(460,260);
context.lineTo(500,340);
context.lineTo(500,400);
context.lineTo(0,400);
context.fill();
context.stroke();

//Lineas Montañas
var cm=10;
for(w=0;w<16;w++){
context.fillStyle = '#000000';
context.strokeStyle="#00ACEE";
context.beginPath();
context.moveTo(0  ,350+cm+jj2);
context.lineTo(60 ,300+cm+jj2);
context.lineTo(100,340+cm+jj2);
context.lineTo(150,280+cm+jj2);
context.lineTo(200,330+cm+jj2);
context.lineTo(260,250+cm+jj2);
context.lineTo(320,330+cm+jj2);
context.lineTo(370,280+cm+jj2);
context.lineTo(420,340+cm+jj2);
context.lineTo(460,260+cm+jj2);
context.lineTo(500,340+cm+jj2);
context.lineTo(500,400+cm+jj2);
context.stroke();	
cm=cm+10;
}
	//aca usamos la variable jj2 para animar las montañas
if(jj2==-10){
	jj2=0;
}
jj2=jj2-0.5;

//Piso negro
context.fillStyle = '#000000';
context.fillRect(0,400,500,100);
//Lineas Verticales Piso 1
var x1=250;
var x2=250;
for(t=0;t<25;t++){
	context.strokeStyle="#ff0099";
	context.beginPath();
	context.moveTo(x1,400);
	context.lineTo(x2,500);
	context.stroke();
x1=x1+10;
x2=x2+50;
}
//Lineas Verticales Piso 2
var x1=250;
var x2=250;
for(t=0;t<25;t++){
	context.strokeStyle="#ff0099";
	context.beginPath();
	context.moveTo(x1,400);
	context.lineTo(x2,500);
	context.stroke();
x1=x1-10;
x2=x2-50;
}
//Lineas Horizontales Piso 
var y1=400;
for(t=0;t<11;t++){
	context.strokeStyle="#ff0099";
	context.beginPath();
	context.moveTo(0,y1+jj3);
	context.lineTo(500,y1+jj3);
	context.stroke();
y1=y1+10;
}
	//aca usamos la variable jj3 para animar el piso
if(jj3==10){
	jj3=0;
}
jj3=jj3+0.5;

//Mi Texto
context.textAlign='center';
context.strokeStyle='Black';
context.font='40pt Times New Roman';
context.strokeText('PEACE',250,80);
//Con este comando animamos la escena
window.requestAnimationFrame(paisaje);
}
//Con este comando animamos la escena
window.requestAnimationFrame(paisaje);