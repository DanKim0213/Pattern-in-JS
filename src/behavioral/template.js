class Tax {

    calc(value) {
        if (value >= 1000) 
            value = this.overThousand(value);

        return this.complementaryFee(value);
    }

    // overThousand() method is not present here!
    
    complementaryFee(value) {
        return value + 10;
    }
}

class Tax1 extends Tax {
    
    constructor() {
        super();
    }

    // the mothod is present here
    overThousand(value) {
        return value * 1.1;
    }
}

class Tax2 extends Tax {

    constructor() {
        super();
    }

    // the method is present here
    overThousand(value) {
        return value * 1.2;
    }
}

export {
    Tax1,
    Tax2
};