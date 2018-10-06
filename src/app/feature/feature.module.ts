import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/module/home.module'

@NgModule({
  imports: [
    CommonModule,
    // HomeModule
  ],
  exports: [
    CommonModule,
    // HomeModule
  ]
})
export class FeatureModule { }
