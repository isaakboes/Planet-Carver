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

//init begins the creation process for the solar system
function init(){
    percentComplete=0;//resets the completion percentage
    Math.seedrandom(document.getElementById("seed").innerHTML+getElementById("eccentricity").innerHTML);//seeds the random generator based on the seed input
}
//creates the basic framework for the solar system by choosing a centeral body, and amount of planets, astroid belts, comets, material composition, etc
//also creates div elements for displaying information on the celestial bodies as needed
function createPlanetaryBodies(){
    //choosing a central body

    /*
    Suggested probabilities for stars:
    
    Numbers are approximate
    Radius, Mass, Luminosity are relative to sun
    Type        | Prob | Temp(kK) | Radius | Mass  | Luminosity | Lifetime (yrs) | Common Name

    Main M      | 70%  | 3.2      | 0.3    | 0.2   | 0.01       | 200G           | 
    Main K      | 10%  | 4.5      | 0.8    | 0.7   | 0.2        | 50G            |
    Main G      | 5.5% | 5.7      | 1      | 1     | 1          | 10G            |
    Main F      | 3.5% | 6.5      | 1.3    | 1.5   | 4          | 3G             |
    Main A      | 2%   | 8.5      | 1.7    | 2     | 20         | 1G             |
    Main B      | 1%   | 20       | 5      | 10    | 1k         | 100M           |
    Main O      | 0.1% | 40       | 10     | 50    | 100k       | 10M            |
    White Dwarf | 6.5% | <80      | <0.01  | <1.5  | <0.01      | long time      |
    Giant       | 1%   | 3-10     | 10-50  | 1-5   | 50-1k      | 1G             |
    Supergiant  | .4%  | 4-40     | 30-500 | 10-70 | 30k-1M     | 10M            |

    */

    /*
    Suggested probabilities for stars:
    
    Numbers are approximate
    Radius, Mass, Luminosity are relative to sun
    Type        | Prob | Temp(kK) | Radius | Mass  | Luminosity | Lifetime (yrs) |      Color      | Common Name 

    Main M      | 70%  | 2.4-3.7  | 0.3    | 0.2   | 0.01       | 200G           | red-orange      |
    Main K      | 10%  | 3.7-5.2  | 0.8    | 0.7   | 0.2        | 50G            | yellow-orange   |
    Main G      | 5.5% | 5.2-6.0  | 1      | 1     | 1          | 10G            | yellow-white    |
    Main F      | 3.5% | 6.0-7.5  | 1.3    | 1.5   | 4          | 3G             | white           |
    Main A      | 2%   | 7.5-10.0 | 1.7    | 2     | 20         | 1G             | blue-white      |
    Main B      | 1%   | 10-30    | 5      | 10    | 1k         | 100M           | deep blue-white |
    Main O      | 0.1% | 30-60    | 10     | 50    | 100k       | 10M            | blue            |
    White Dwarf | 6.5% | <80      | <0.01  | <1.5  | <0.01      | long time      | white           |
    Giant       | 1%   | 3-10     | 10-50  | 1-5   | 50-1k      | 1G             | 
    Supergiant  | .4%  | 4-40     | 30-500 | 10-70 | 30k-1M     | 10M            |

    Black Hole  | .3%  | 
    */
   
}
