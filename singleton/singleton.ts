namespace SingletonPattern {

    export class Singleton {

        private static instance: Singleton;
        private counter: number = 0;

        public static getInstance(): Singleton {
            if (!this.instance) {
                this.instance = new Singleton();
            }

            return this.instance;
        }

        public incrementCounter() {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }
    }
}