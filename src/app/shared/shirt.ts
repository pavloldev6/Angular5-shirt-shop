export class Shirt {

    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public price: number = 0,
        public imagePath: string = '',
        public gender: 'M' | 'F'
    ) {}
}
