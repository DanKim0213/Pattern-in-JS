interface Observable {
    register(observer: Observer): void;
    unregister(observer: Observer): void;
    notifyAll(): void;
}

interface Observer {
    update(observable: Observable): void;
}

class Product implements Observable {
    price: number;
    actions: Observer[];

    constructor() {
        this.price = 0;
        this.actions = [];
    }

    setBasePrice(val: number): void {
        this.price = val;
        this.notifyAll();
    }
    register(observer: Observer): void {
        this.actions.push(observer);
    }
    unregister(observer: Observer): void {
        // this.actions = this.actions.filter((el) => (observer instanceof Profit) && el.price !== );
    }
    notifyAll(): void{
        this.actions.forEach(el => el.update(this));
    }

}

class Fees {
    fee: number;
    update(product: Product): void {
        product.price = product.price *1.2;
    }  
}

class Profit {
    update(product: Product): void {
        product.price = product.price * 2;
    }
}

export {
    Product,
    Fees,
    Profit
};