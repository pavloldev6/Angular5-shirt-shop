import { Shirt } from './shirt';
import { ShirtSize } from './shirt-size';

export class ShoppingItem {
    constructor(
        public shirt: Shirt,
        public quantity: number,
        public size: ShirtSize
    ) {}
}
