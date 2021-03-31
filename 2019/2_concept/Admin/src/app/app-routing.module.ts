import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {ProductsComponent} from "./dashboard/products/products.component";
import {IndexComponent} from "./dashboard/index/index.component";

const routes: Routes = [
  {path: '*', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'dashboard', component: IndexComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
