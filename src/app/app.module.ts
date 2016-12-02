import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './_base/app.component';

import { AppRoutingModule } from './app.routing.module';
import { AboutModule } from './about/about.module'
import { WorkModule } from './work/work.module'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    WorkModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }