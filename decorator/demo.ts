/// <reference path="decorator.ts" />

namespace DecoratorPattern {

    export function show() {
        const general = new GeneralCoffee();
        const withBubble = new BubbleDecorator(general);
        const withMilk = new MilkDecorator(withBubble);
        console.log(`Total: ${withMilk.cost()}`);
    }

}