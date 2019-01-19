namespace AbstractFactoryPattern {

	export type DrawingTypes = "square" | "rectangle";

    export interface DrawingsFactory {
        getDrawing(type: DrawingTypes): Drawing
    }

    export interface Drawing {
        takePen();
        makeDrawing();
    }

    class Square implements Drawing {
        takePen() {
            console.log("Take pen for square");
        }

        makeDrawing() {
            console.log("Draw square");
        }
    }

	class Rectangle implements Drawing {
        takePen() {
            console.log("Take pen for rectangle");
        }

        makeDrawing() {
            console.log("Draw rectangle");
        }
    }

    export class SimpleDrawingsFactory implements DrawingsFactory {
        getDrawing(type: DrawingTypes): Drawing {
            if (type == "square") {
                return new Square();
            } else if (type == "rectangle") {
                return new Rectangle();
            } else {
                throw new Error("Unknown shape");
            }
        }
    }

    class RoundedSquare implements Drawing {
        takePen() {
            console.log("Take pen for rounded square");
        }

        makeDrawing() {
            console.log("Draw rounded square");
        }
    }

	class RoundedRectangle implements Drawing {
        takePen() {
            console.log("Take pen for rounded rectangle");
        }

        makeDrawing() {
            console.log("Draw rounded rectangle");
        }
    }

    export class RoundedDrawingsFactory implements DrawingsFactory {
        getDrawing(type: DrawingTypes): Drawing {
            if (type == "square") {
                return new RoundedSquare();
            } else if (type == "rectangle") {
                return new RoundedRectangle();
            } else {
                throw new Error("Unknown shape");
            }
        }
    }
}