import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '' , redirectTo: '/home' , pathMatch: 'full'},
   {
     path: 'home' , component: HomeComponent
   } ,
   {path: 'menu' , component: MenuComponent} ,
   {path: 'about' , component: AboutComponent} ,
   {path: 'contact' , component: ContactComponent} ,
   {path: 'dishdetail/:id' , component: DishdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
