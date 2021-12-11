import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from 'src/app/user';
import { AuthResponse } from '../authresponse';
import { KohinorDataServiceService } from 'src/app/services/kohinor-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage, 
    private kohinorDataServiceService: KohinorDataServiceService) { }
  
  public getToken(): string {
    return this.storage.getItem('db_kohinor-token')!;
  }
  public saveToken(token: string): void {
    this.storage.setItem('db_kohinor-token', token);
  }
  public login(user: User): Promise<any> {
    return this.kohinorDataServiceService.login(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }
  public register(user: User): Promise<any>{
    return this.kohinorDataServiceService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }
  public logout(): void {
    this.storage.removeItem('db_kohinor-token');
  }
  public isLoggedIn(): boolean {
    const token: string = this.getToken();
      if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp > (Date.now() / 1000);
      } else {
        return false;
      }
  }
  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, nombre, apellido } = JSON.parse(atob(token.split('.')[1]));
      return { email, nombre, apellido } as User;
    }
  }
}
