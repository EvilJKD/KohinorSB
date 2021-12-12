import { Component, OnInit } from '@angular/core';
import { Register } from '../interfaces/register';
import { Router } from '@angular/router';
import { KohinorDataServiceService } from '../services/kohinor-data-service.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  
  /* public newUser: Register = {
    nombre: '',
    apellido: '',
    email: '',
    contrasena: ''
  }; */
  public formError: string ='';
  
  public credentials = {
    nombre: '',
    apellido: '',
    email: '',
    contrasena: ''
  };
  public onUserCreateSubmit(): void{
    this.formError='';
    if(!this.credentials.nombre || !this.credentials.apellido || !this.credentials.email || !this.credentials.contrasena){
      this.formError = "Por favor, llene todos los campos";
    } else {
      this.doRegister();
    }
  }

  private doRegister(): void {
    this.authenticationService.register(this.credentials)
      .then(() => window.location.href = '/overview')
      .catch((message) => this.formError = message);
  }
  
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
  }

}
