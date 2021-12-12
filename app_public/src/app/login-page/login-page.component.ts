import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public formError: string ='';
  
  public credentials = {
    nombre: '',
    apellido: '', 
    email: '',
    password: ''
  };


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.doLogin();
    }
  }
  private doLogin(): void {
    this.authenticationService.login(this.credentials)
      .then( () => {
        if(this.credentials.email == "servicio.it@kohinor.com.ec"){
          window.location.href = '/it_usrs'
        }else{
          window.location.href = '/overview'
        }
      })
      .catch( (message) => {
        this.formError = message
    });
  }

}
