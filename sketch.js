
var time=0;
let slider;



function setup() {


	createCanvas(900, 600);

slider=createSlider(1,200,1);




}







let wave=[];
function draw() {



	background(0);
	translate(300,400);




let x=0,y=0;
let l=slider.value();
for(let i=0;i<l;i++){
	let prevx=x,prevy=y;

	let n=i*2+1;
	let radius=75*(4/(PI*n));
 x=x+radius*cos(n*time);
 y=y+radius*sin(n*time);

 noFill();
 strokeWeight(5);
	stroke(150,250,150,50);
	ellipse(prevx,prevy,radius*2);
//fill(255);
stroke(255);
strokeWeight(1);


//ellipse(x,y,8);

line(prevx,prevy,x,y)


console.log(y+"dup");
}



console.log(y);



line(x,y,200,y);

translate(200,0);
 wave.unshift(y);
beginShape();

noFill();
for(let i=0;i<wave.length;i++){
	vertex(i,wave[i]);
}
endShape();



time+=0.03;
if(time==360){
	time=0;
}


}
