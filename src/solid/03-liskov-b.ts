
export abstract class Vehiculo {

    /* getNumberOfSeats(): number {
        throw new Error("Method not implemeted");
    } */
   abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehiculo {

    constructor( private numberOfSeats: number ) {
        super();
    }

    /*getNumberOfTeslaSeats() {
        return this.numberOfSeats;
    }*/

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehiculo {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehiculo {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehiculo {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class BMW extends Vehiculo {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}