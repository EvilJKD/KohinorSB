import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FrameworkComponent } from './framework/framework.component';
import { KohinorsbPageComponent } from './kohinorsb-page/kohinorsb-page.component';
import { ContactoPageComponent } from './contacto-page/contacto-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FuncionPageComponent } from './funcion-page/funcion-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutPageComponent,
    FrameworkComponent,
    KohinorsbPageComponent,
    ContactoPageComponent,
    LoginPageComponent,
    FuncionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }