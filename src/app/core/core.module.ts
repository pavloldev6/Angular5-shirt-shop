import { NgModule } from '@angular/core';
import { ShirtService } from './shirt.service';
import { ShoppingCartService } from './shopping-cart.service';

@NgModule({
    providers: [ShirtService, ShoppingCartService]
})
export class CoreModule {}
