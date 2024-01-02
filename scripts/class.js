class Object {//the Object class defines any physical body within a star system including but not limited to stars, planets, asteroids, black holes, neutron stars, and comets.
    constructor(mass, age, initialComposition){

    }
}
class CenteralBody extends Object {//the Object class defines any physical body within a star system including but not limited to stars, planets, asteroids, black holes, neutron stars, and comets.
    constructor(){
        super(mass, age, initialComposition);
    }
}
//A Class for holding information about Elements
class Element {
    constructor(atomicNumber, symbol, name, mass, ) {
        this.atomicNumber = -1;
        this.symbol = "Unassigned Symbol";
        this.name = "Unassigned Name";
        this.atomicMass = -1;

    }
}
// A Class for describing materials (elements, alloys, compounds, ionic substances)
class Material {
    
}

class Composite {

}