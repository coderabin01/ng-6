import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import {ContactComponent} from './../feature/contact/contact.component';
import { HomeModule} from './../feature/home/module/home.module';

export const routes: Routes = [
  {path: 'home', loadChildren: './../feature/home/module/home.module#HomeModule'},
  // {path: 'home', loadChildren: () => HomeModule},  
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ContactComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
