class ShoppingCart {

    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount); // TODO: I didn't define this.count() method 
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

function guestStrategy(amount) {
    return amount;
}

function regularStrategy(amount) {
    return amount * 0.9;
}

function premiumStrategy(amount) {
    return amount * 0.8;
}

export {
    ShoppingCart,
    guestStrategy,
    regularStrategy,
    premiumStrategy
};