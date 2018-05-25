import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ShirtComponent } from './components/shirt/shirt.component';

import { ShirtGenderPipe } from './filters/shirt-filter';
// For material tabs
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// For bootstrap tabs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { SizeSelectComponent } from './shared/size-select.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent,
    children: [
      { path: 'shopping-cart', component: ShoppingCartComponent }
    ]}
  // { }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ShippingComponent,
    CatalogComponent,
    ShirtComponent,
    ShirtGenderPipe,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    SizeSelectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTabsModule,
    NgbModule.forRoot(),
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
