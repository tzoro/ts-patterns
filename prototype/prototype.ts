namespace PrototypePattern {

    export interface Vehicle {
        horsepower: number;
        topspeed: number;
        clone(): Vehicle
    }

    export class Saloon implements Vehicle {
        horsepower: number;
        topspeed: number;
        seats: number;

        public clone(): Vehicle {
            let vehicle = new Saloon();
            vehicle.horsepower = this.horsepower;
            vehicle.topspeed = this.topspeed;
            vehicle.seats = this.seats;

            return vehicle;
        }
    }

    export class Sportscar implements Vehicle {
        horsepower: number;
        topspeed: number;
        turbo: boolean;

        public clone(): Vehicle {
            let sportscar = new Sportscar();
            sportscar.horsepower = this.horsepower;
            sportscar.topspeed = this.topspeed;
            sportscar.turbo = this.turbo;

            return sportscar;
        }
    }
}