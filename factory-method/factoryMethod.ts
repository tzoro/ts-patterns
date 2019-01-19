namespace FactoryMethodPattern {

    interface Product {

    }

    export type ProductType = "affordable" | "expensive";

    export class Factory {
        public static getProduct(type: ProductType): Product {
            if (type == "affordable") {
                return new AffordableProduct();
            } else if (type == "expensive") {
                return new ExpensiveProduct();
            }

            throw new Error("Unknown product type");
        }
    }

    class AffordableProduct implements Product {
        public type: ProductType = "affordable"
    }

    class ExpensiveProduct implements Product {
        public type: ProductType = "expensive"
    }

}