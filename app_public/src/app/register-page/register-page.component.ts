import { Component, OnInit } from '@angular/core';
import { Register } from '../interfaces/register';
import { KohinorDataServiceService } from '../services/kohinor-data-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  
  public newUser: Register = {
    nombre: '',
    apellido: '',
    email: '',
    contrasena: ''
  };
  public onUserCreateSubmit(): void{
    if(this.formIsValid()){
      this.kohinorDataService.addUser(this.newUser)
      .subscribe({
        next:(data) => {
        this.resetAndHideReviewForm()
      },
      error:(e)=>{
        console.error(e);
      }
      });
    }
  }
  
  private formIsValid(): boolean {
    if (this.newUser.nombre && this.newUser.apellido && this.newUser.email && this.newUser.contrasena) {
      return true;
    } else {
      return false;
    }
  }

  private resetAndHideReviewForm(): void {
    this.newUser.nombre = '';
    this.newUser.apellido = '';
    this.newUser.email = '';
    this.newUser.contrasena = '';
  }
  
  constructor(private kohinorDataService: KohinorDataServiceService) { }

  ngOnInit(): void {
  }

}
