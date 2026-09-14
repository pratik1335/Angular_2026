// ng g class models/product - How to create a class

export class Product {
    // There are two ways to initialize the class properties, direct initialization or using constructor
    // id: number = 0;
    // name: string = "";
    // price: number = 0;
    // image_url: string = "";

    id: number;
    name: string;
    price: number;
    image_url: string;

    constructor(){
        this.id = 0;
        this.name = "";
        this.price = 0;
        this.image_url = "";
    }
}
