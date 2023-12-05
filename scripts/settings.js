//handles the menu
function setScreen(screen){
    switch(screen){
        case "save":

        break;
        case "gen":

        break;
        case "about":

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