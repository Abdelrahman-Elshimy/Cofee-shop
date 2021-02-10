import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/customers/home/home.component';
import { SignupComponent } from './components/customers/signup/signup.component';
import { CartComponent } from './components/customers/cart/cart.component';
import { OrdersComponent } from './components/customers/orders/orders.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/customers/design-parts/navbar/navbar.component';
import { FooterComponent } from './components/customers/design-parts/footer/footer.component';
import { MenuComponent } from './components/customers/menu/menu.component';
import { ServicesComponent } from './components/customers/services/services.component';
import { BlogComponent } from './components/customers/blog/blog.component';
import { AboutComponent } from './components/customers/about/about.component';
import { ShopComponent } from './components/customers/shop/shop.component';
import { CheckoutComponent } from './components/customers/checkout/checkout.component';
import { ContactComponent } from './components/customers/contact/contact.component';
import { SingleProductComponent } from './components/customers/single-product/single-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    CartComponent,
    OrdersComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    ServicesComponent,
    BlogComponent,
    AboutComponent,
    ShopComponent,
    CheckoutComponent,
    ContactComponent,
    SingleProductComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
