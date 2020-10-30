import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { SingleCardComponent } from './single-card/single-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    SingleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
