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
import { SharedSectionTopComponent } from './components/customers/design-parts/shared-section-top/shared-section-top.component';
import { ServicesSectionComponent } from './components/customers/design-parts/services-section/services-section.component';
import { BlogSectionComponent } from './components/customers/design-parts/blog-section/blog-section.component';
import { StorySectionComponent } from './components/customers/design-parts/story-section/story-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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
    SharedSectionTopComponent,
    ServicesSectionComponent,
    BlogSectionComponent,
    StorySectionComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
