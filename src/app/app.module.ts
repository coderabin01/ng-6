import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeatureModule } from './feature/feature.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
