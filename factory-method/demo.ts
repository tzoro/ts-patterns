/// <reference path="factoryMethod.ts" />

namespace FactoryMethodPattern {
    export function show() {
        let product = Factory.getProduct("affordable");
        console.log(product);
    }
}