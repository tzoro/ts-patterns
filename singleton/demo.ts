/// <reference path="singleton.ts" />

namespace SingletonPattern {

    export function show() {
        console.log(Singleton.getInstance().getCounter());
        Singleton.getInstance().incrementCounter();
        console.log(Singleton.getInstance().getCounter());
        Singleton.getInstance().incrementCounter();
        console.log(Singleton.getInstance().getCounter());
    }
}