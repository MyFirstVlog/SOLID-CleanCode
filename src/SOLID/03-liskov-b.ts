

export abstract class Vehicle {
    // Sirven para trabajar con herencia
    // getNumberOfSeats(): number{
    //     throw Error('Method is not implemented');
    // }
    abstract getNumberOfSeats(): number ;
    // Las clases que extiendan de mis clases abstractas deben de implementar el metodo abstracto
} 

export class Tesla extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }


    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}


