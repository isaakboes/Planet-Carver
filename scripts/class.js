const PI = 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844
class Object {//the Object class defines any physical body within a star system including but not limited to stars, planets, asteroids, black holes, neutron stars, and comets.
    constructor(mass, age, radius, initialComposition){
        this.name = "";
        this.mass = mass;
        this.age = age;
        this.initialComposition = initialComposition;
        this.radius = radius;
        this.diameter = 2*this.radius;
        this.circumference = PI * this.diameter;
        this.surfaceArea = 4 * PI * this.radius ** 2;
        this.volume = (4 / 3) * PI * this.radius ** 3;
        this.averageDensity = this.mass / this.volume;
        this.map = {
            atmosphere: [],
            surface: [],
            subterranean: [],
            geothermal: [],
            mantle: [],
        }
    }
}
//A Class for holding information about Elements
class Element {
    constructor(atomicNumber, symbol, name, mass) {
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