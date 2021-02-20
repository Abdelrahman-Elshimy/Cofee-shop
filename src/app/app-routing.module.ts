import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/customers/about/about.component';
import { BlogComponent } from './components/customers/blog/blog.component';
import { CartComponent } from './components/customers/cart/cart.component';
import { CheckoutComponent } from './components/customers/checkout/checkout.component';
import { ContactComponent } from './components/customers/contact/contact.component';
import { HomeComponent } from './components/customers/home/home.component';
import { MenuComponent } from './components/customers/menu/menu.component';
import { OrdersComponent } from './components/customers/orders/orders.component';
import { ServicesComponent } from './components/customers/services/services.component';
import { ShopComponent } from './components/customers/shop/shop.component';
import { SignupComponent } from './components/customers/signup/signup.component';
import { SingleProductComponent } from './components/customers/single-product/single-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'product/:id', component: SingleProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
