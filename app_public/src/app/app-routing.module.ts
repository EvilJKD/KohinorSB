import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { KohinorsbPageComponent } from './kohinorsb-page/kohinorsb-page.component';
import { ContactoPageComponent } from './contacto-page/contacto-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FuncionPageComponent } from './funcion-page/funcion-page.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { ModulosPageComponent } from './modulos-page/modulos-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CrearModuloPageComponent } from './crear-modulo-page/crear-modulo-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path:'about',
    component: AboutPageComponent
  },
  {
    path:'kohinor',
    component: KohinorsbPageComponent
  },
  {
    path: 'contacto',
    component: ContactoPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'funcion',
    component: FuncionPageComponent
  },
  {
    path: 'ticket',
    component: TicketPageComponent
  },
  {
    path: 'modulos',
    component: ModulosPageComponent
  },
  {
    path: 'registro',
    component: RegisterPageComponent
  },
  {
    path: 'crearModulo',
    component: CrearModuloPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
