/// <reference path="prototype.ts" />

namespace PrototypePattern {

    export function show() {

        let familysaloon = new Saloon();
        familysaloon.horsepower = 85;
        familysaloon.topspeed = 255;
        familysaloon.seats = 5;

        let hatchback = familysaloon.clone();
        hatchback.horsepower = 105;

        console.log(familysaloon);
        console.log(hatchback);
    }
}