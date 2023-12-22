class Object {//the Object class defines any physical body within a star system including but not limited to stars, planets, asteroids, black holes, neutron stars, and comets.
    constructor(mass, age){

    }
}
class Element {
    constructor(name, symbol, emission = []){
        this.name=name;             //the name of the element
        this.symbol=symbol;         //the element symbol
        this.halflife=halflife;     //the half life of the element (in seconds)
        this.decayTypes=decayTypes;
        this.emission=emission;     //the emission spectra of the element (in nm)
    }
}
class Compound {
    constructor(name /*the common name of the compound*/, compound /*the chemical name for the compound*/){

    }
}
class Reaction {
    constructor(reactants = [],products = [],energyIn=0,energyOut=0){
        this.reactants = reactants; //the componants neccicary
        this.products = products;   //the componants the reaction produces
        this.energyIn = energyIn;   //the amount of energy needed to begin the reaction
        this.energyOut = energyOut; //the amount of energy produced by the reaction (as heat usually)
        
    }
}