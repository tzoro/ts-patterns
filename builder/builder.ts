namespace BuilderPattern {

    export class Builder {

        private house: House;

        setupHouseBase() {
            this.house = new House();
            this.house.windows = [];
            this.house.walls = [];
        }

        buildFloor() {
            this.house.floor = "stone";
        }

        buildWindow(window: string = "small window") {
            this.house.windows.push(window);
        }

        buildWall() {
            this.house.walls.push("brick")
        }

        buildRoof() {
            this.house.roof = "wood";
        }

        getHouse(): House {
            return this.house;
        }

        public static buildSmallHouse(builder: Builder): House {
            builder.setupHouseBase();
            builder.buildFloor();
            builder.buildWall();
            builder.buildWindow();
            builder.buildRoof();
            return builder.getHouse();
        }

        public static buildBigHouse(builder: Builder): House {
            builder.setupHouseBase();
            builder.buildFloor();
            builder.buildWall();
            builder.buildWall();
            builder.buildWindow("big window");
            builder.buildWindow("big window");
            builder.buildWindow("big window");
            builder.buildRoof();
            return builder.getHouse();
        }
    }

    export class House {
        floor: string;
        walls: string[];
        windows: string[];
        roof: string;
    }
}