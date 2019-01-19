namespace DecoratorPattern {

	interface Coffee {
	  cost(): Number;
	}

	export class GeneralCoffee implements Coffee {
	  cost(): Number {
	    return 10;
	  }
	}

	class CoffeeExtraDecorator implements Coffee {
	  private _coffee: Coffee;

	  constructor(coffee: GeneralCoffee) {
	    this._coffee = coffee;
	  }

	  cost(): Number {
	    return this._coffee.cost();
	  }
	}

	export class BubbleDecorator extends CoffeeExtraDecorator {
	  private _price: Number = 3;

	  cost(): Number {
	    return super.cost().valueOf() + this._price.valueOf();
	  }
	}

	export class MilkDecorator extends CoffeeExtraDecorator {
	  private _price: Number = 2.5;
	  private _freshExtra: Number = 1.5;

	  cost(): Number {
	    return super.cost().valueOf() + this._price.valueOf() + this._freshExtra.valueOf();
	  }
	}
}
