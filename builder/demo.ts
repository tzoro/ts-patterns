/// <reference path="builder.ts" />
namespace BuilderPattern {
    export function show() {
        let builder = new Builder();
        let smallHouse: House = Builder.buildSmallHouse(builder);
        let bigHouse: House = Builder.buildBigHouse(builder);

        console.log(smallHouse);
        console.log(bigHouse);
    }
}