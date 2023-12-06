//handles the menu
//checking if js is working by printing to the console
var consoleLine = document.createElement("div");
consoleLine.classList.add("console");
consoleLine.appendChild(document.createTextNode("If this message is visible, Javascript is working propperly!"))
document.getElementById("console").appendChild(consoleLine);
//end check
function setScreen(screen){
    document.getElementById("gen").classList.add("close");//closes all fullscreen
    document.getElementById("help").classList.add("close");
    document.getElementById("about").classList.add("close");
    document.getElementById(":o").classList.add("close");
    switch(screen){
        case "gen":
            document.getElementById("gen").classList.remove("close");
        break;
        case "about":
            document.getElementById("about").classList.remove("close");
        break;
        case "help":
            document.getElementById("help").classList.remove("close");
        break;
        case ":o":
            document.getElementById(":o").classList.remove("close");
        break;
        case "none":
            //do nothing
        break;
    }
}
function setInfoPanel(state){
    if(state){
        document.getElementById("systemInfo").classList.remove("close");
        document.getElementById("openInfo").classList.remove("close");
    }else{
        document.getElementById("systemInfo").classList.add("close");
        document.getElementById("openInfo").classList.add("close");
    }
}
function generateSeed(length) {//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

document.onload = document.getElementsByName("seed")[0].value=generateSeed(30);


function setToolPanel(state){
    if(state){
        document.getElementById("tools").classList.remove("close");
        document.getElementById("openTools").classList.remove("close");
    }else{
        document.getElementById("tools").classList.add("close");
        document.getElementById("openTools").classList.add("close");
    }
}

function save(){
    console.log("Saving!")
}

function load(){
    console.log("Loading!")
}

/*
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
},5);*/