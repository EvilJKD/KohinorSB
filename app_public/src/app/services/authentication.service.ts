import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from 'src/app/interfaces/user';
import { AuthResponse } from '../interfaces/authresponse';
import { KohinorDataServiceService } from 'src/app/services/kohinor-data-service.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private cookieService: CookieService, private kohinorDataServiceService: KohinorDataServiceService) { }

  public saveToken(token: string): void {
    this.cookieService.set('db_kohinor-token', token);
  }
  public login(user: User): Promise<any> {
    return this.kohinorDataServiceService.login(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }
  public register(user: User): Promise<any>{
    return this.kohinorDataServiceService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }
}
