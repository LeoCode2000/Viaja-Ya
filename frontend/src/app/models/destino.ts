export class Destino {
    _id?: number;
    name: string;
    description: string;
    ubication: string;
    price: number;

    constructor(name: string, description: string, ubication: string, price: number) {
        this.name = name;
        this.description = description;
        this.ubication = ubication;
        this.price = price;

    }
}