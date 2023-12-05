//setting up the canvas for rendering
const canvas = document.getElementById("canv");//sets the canvas
const ctx = canvas.getContext('2d');//sets the context of the canvas
ctx.globalAlpha = 1;//sets the alpha to 1 (this is default)
var pageWidth = window.innerWidth;//finds the window width
var pageHeight = window.innerHeight-5;//finds the window height
setInterval(function(){//sets the canvas width and height every second
    pageWidth = window.innerWidth;//finds the window width every second
    pageHeight = window.innerHeight-5;//finds the window height every second
    canvas.width = pageWidth;//sets canvas width to page width
    canvas.height = pageHeight;//sets canvas height to page height
},1000);//end setInterval
var percentComplete = 0;//the percentage completion of the current generation

//--temporary-- VERY IMPORTANT
var x = 0;
var y = 0;
var xv = 1;
var yv = 1;
var degrees = 0;
setInterval(function(){
    ctx.fillStyle="hsl("+degrees+"deg, 100%, 50%)";
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(x,y,50,50);
    x+=xv;
    y+=yv;
    if(x<=0||x+50>=canvas.width){xv=-xv}
    if(y<=0||y+50>=canvas.height){yv=-yv}

    if(degrees<360){degrees++}else{degrees=0}
},5);

//init begins the creation process for the solar system
function init(){
    percentComplete=0;//resets the completion percentage
    Math.seedrandom(document.getElementById("seed").innerHTML+getElementById("eccentricity").innerHTML);//seeds the random generator based on the seed input
}
//creates the basic framework for the solar system by choosing a centeral body, and amount of planets, astroid belts, comets, material composition, etc
//also creates div elements for displaying information on the celestial bodies as needed
function createPlanetaryBodies(){
    //choosing a centeral body

}
