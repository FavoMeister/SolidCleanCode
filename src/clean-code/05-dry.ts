type Size = ''| 'S'|'M'|'L';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){}

    toString() {
        // no DRY
        if( this.name.length <= 0) throw Error ('name is empty');
        if( this.price <= 0) throw Error ('price is zero');
        if( this.size.length <= 0) throw Error ('size is empty');

        return `${ this.name } (${ this.price }), ${this.size} `
    }
}

(() => { // Anonymous function

    const bluePants = new Product('Blue Large Pants', 12, 'M');
    console.log(bluePants.toString());
    


})();