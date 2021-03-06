import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FrameworkComponent } from './framework/framework.component';
import { KohinorsbPageComponent } from './kohinorsb-page/kohinorsb-page.component';
import { ContactoPageComponent } from './contacto-page/contacto-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FuncionPageComponent } from './funcion-page/funcion-page.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { ModulosPageComponent } from './modulos-page/modulos-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CrearModuloPageComponent } from './crear-modulo-page/crear-modulo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutPageComponent,
    FrameworkComponent,
    KohinorsbPageComponent,
    ContactoPageComponent,
    LoginPageComponent,
    FuncionPageComponent,
    TicketPageComponent,
    ModulosPageComponent,
    RegisterPageComponent,
    CrearModuloPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, CookieService],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
