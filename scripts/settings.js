//handles the menu
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