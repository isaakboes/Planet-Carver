/*=======================================================================================================================================================
    variable declaration area, as well as an area for general setup, class information, and utility functions.
=======================================================================================================================================================*/
//setting up the canvas for rendering
const canvas = document.getElementById("canv"); //sets the canvas
const ctx = canvas.getContext('2d');            //sets the context of the canvas
ctx.globalAlpha = 1;                            //sets the alpha to 1 (this is default)
var pageWidth = window.innerWidth;              //finds the window width
var pageHeight = window.innerHeight-5;          //finds the window height
setInterval(function(){                         //sets the canvas width and height every second
    pageWidth = window.innerWidth;              //finds the window width every second
    pageHeight = window.innerHeight-5;          //finds the window height every second
    canvas.width = pageWidth;                   //sets canvas width to page width
    canvas.height = pageHeight;                 //sets canvas height to page height
},1000);                                        //end setInterval
var percentComplete = 0;                        //the percentage completion of the current generation
function print(output){                                     //printing messages to the custom console; used for progress updates, NOT webpage errors
    var println = document.createElement("div");            //creates new div
    println.classList.add("console");                       //gives the div the 'console' class
    println.appendChild(document.createTextNode(output));   //appends text to the div
    document.getElementById("console").appendChild(println);//appends the div to the console
}//end print
var running = false;                            //is the simulation running
const delay = 100;                              //amount of time (msec) to wait in between steps
const fetchTimeout = (url, ms, { signal, ...options } = {}) => {            //https://stackoverflow.com/questions/46946380/fetch-api-request-timeout/57888548#57888548
    const controller = new AbortController();                               //fetching json with a timeout
    const promise = fetch(url, { signal: controller.signal, ...options });
    if (signal) signal.addEventListener("abort", () => controller.abort());
    const timeout = setTimeout(() => controller.abort(), ms);
    return promise.finally(() => clearTimeout(timeout));
  };
/*=======================================================================================================================================================
    init begins the creation process for the solar system, initalizing variables and seeding the random generator.
=======================================================================================================================================================*/
async function init(){
    if(!running){
        print("Getting Config...");                                                     //prints to get the config json
        try{
            let config = JSON.parse(await fetchTimeout("https://rpgrat.org/planet/config.json",5000));            //calling for the json config file and parsing
        }catch(error){
            print("Could not access JSON, Exiting...")
            return;
        }
        print("Downloaded JSON...")
        print("Beginning Generation...")                                                //if the program is not already running
        percentComplete=0;                                                              //resets the completion percentage
        running=true;                                                                   //marks the program as 'running'
        document.getElementById("genButton").classList.add("down");                     //visually shows that the program is running
        print("Using \""+document.getElementById("seed").value+"\" as generation seed");//prints to the custom console
        Math.seedrandom(document.getElementById("seed").value);                         //seeds the random generator based on the seed input

        setTimeout(createCenteralBodies(),delay);                                      //waits before continuing to avoid browser freeze
    }                                                                                   //if a simulation is already running do nothing
}
/*=======================================================================================================================================================
    creates the basic framework for the solar system by choosing a centeral body also creates div elements for displaying information on the celestial 
    bodies as needed
=======================================================================================================================================================*/
function createCenteralBodies(){
    print("Creating celestial objects and choosing solar system composition");
    //choosing a central body

    /*
    Suggested probabilities for stars:
    
    Numbers are approximate
    Radius, Mass, Luminosity are relative to sol
    Type        | Prob | Temp(kK) | Radius | Mass  | Luminosity | Lifetime (yrs) |      Color      |  Common Name  | Activeness |

    Main M      | 69.7%| 2.4-3.7  | 0.3    | 0.2   | 0.01       | 200G           | red-orange      | Red Dwarf     | 
    Main K      | 10%  | 3.7-5.2  | 0.8    | 0.7   | 0.2        | 50G            | yellow-orange   | Main Sequence | 
    Main G      | 5.5% | 5.2-6.0  | 1      | 1     | 1          | 10G            | yellow-white    | Main Sequence | 
    Main F      | 3.5% | 6.0-7.5  | 1.3    | 1.5   | 4          | 3G             | white           | Main Sequence | 
    Main A      | 2%   | 7.5-10.0 | 1.7    | 2     | 20         | 1G             | blue-white      | Main Sequence | 
    Main B      | 1%   | 10-30    | 5      | 10    | 1k         | 100M           | deep blue-white | Main Sequence | 
    Main O      | 0.1% | 30-60    | 10     | 50    | 100k       | 10M            | blue            | Main Sequence | 
    White Dwarf | 6.5% | 5-40     | <0.01  | <1.5  | <0.01      | long time      | white           | White Dwarf   | 
    Giant       | 1%   | 3-10     | 10-50  | 1-5   | 50-1k      | 1G             | red to white    | Giant         | 
    Supergiant  | .4%  | 4-40     | 30-500 | 10-70 | 30k-1M     | 10M            | red to blue     | Supergiant    | 

    Black Hole  | .3%  | 0-10000  | 
    */

}
function selectElementalMakeup(){
    //choosing an elemental composition of the system
    /*
    [H ]       This periodic table is not useful                        [He]
    [Li][Be]   But it's fun, so here it is.         [B ][C ][N ][O ][F ][Ne]
    [Na][Mg]                                        [Al][Si][P ][S ][Cl][Ar]
    [K ][Ca][Sc][Ti][V ][Cr][Mn][Fe][Co][Ni][Cu][Zn][Ga][Ge][As][Se][Br][Kr]
    [Rb][Sr][Y ][Zr][Nb][Mo][Tc][Ru][Rh][Pd][Ag][Cd][In][Sn][Sb][Te][I ][Xe]
    [Cs][Ba][  ][Hf][Ta][W ][Re][Os][Ir][Pt][Au][Hg][Tl][Pb][Bi][Po][At][Rn]
    [Fr][Ra][  ][Rf][Db][Sg][Bh][Hs][Mt][Ds][Rg][Cn][Nh][Fl][Mc][Lv][Ts][Og]
            
            [La][Ce][Pr][Nd][Pm][Sm][Eu][Gd][Tb][Dy][Ho][Er][Tm][Yb][Lu]
            [Ac][Th][Pa][U ][Np][Pu][Am][Cm][Bk][Cf][Es][Fm][Md][No][Lr]

            element percentages are included in config.json
    */
}