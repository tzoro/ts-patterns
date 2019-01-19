/// <reference path="abstractFactory.ts" />

namespace AbstractFactoryPattern {

    class Client {
        constructor(private factory: SimpleDrawingsFactory) {
            let artwork: Drawing = this.factory.getDrawing("square");
            artwork.takePen();
            artwork.makeDrawing();
        }
    }

    class AnotherClient {
        constructor(private factory: RoundedDrawingsFactory) {
            let artwork: Drawing = this.factory.getDrawing("square");
            artwork.takePen();
            artwork.makeDrawing();
        }
    }

    export function show() {
        let simpleDrawingsFactory = new SimpleDrawingsFactory();
        let client = new Client(simpleDrawingsFactory);

        let roundedDrawingsFactory = new RoundedDrawingsFactory();
        let roundedClient = new AnotherClient(roundedDrawingsFactory);
    }
}