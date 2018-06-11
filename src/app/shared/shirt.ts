import { ColourPickerComponent } from "../components/colour-picker/colour-picker.component";

export class Shirt {

    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public price: number = 0,
        public imagePath: string = '',
        public gender?: 'M' | 'F',
        public shirtColour: Colour = { name: 'white', value: "#FFFFFF" },
        public shirtStyle: string = '',
        public graphic?: { name: string, colour: Colour, fileName: string },
        public text?: { name: string, colour: Colour }
    ) {}
}

export interface Colour {
    name: string,
    value: string
}
