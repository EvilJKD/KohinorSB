import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../user';
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
    return this.storage.getItem('db_kohinor-token');
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
}
