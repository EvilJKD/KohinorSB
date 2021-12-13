import { Injectable } from '@angular/core';
//Import del servicio HTTP, y del servicio HTTPClient (para llamar a los métodos del servicio HTTP) al servicio discar-data
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Modulos } from 'src/app/interfaces/modulos';
import { Tickets } from 'src/app/interfaces/tickets';
import { Register } from 'src/app/interfaces/register';
import { User } from '../interfaces/user';
import { AuthResponse } from '../interfaces/authresponse';

@Injectable({
  providedIn: 'root'
})
export class KohinorDataServiceService {

  private apiBaseUrl = 'http://localhost:3000';
  //private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getModulos() {
    const url: string = `${this.apiBaseUrl}/api/modulo/`;
    return this.http.get<Modulos[]>(url)
  }
  public getTickets() {
    const url: string = `${this.apiBaseUrl}/api/ticket/`;
    return this.http.get<Tickets[]>(url)
  }
  public addUser(formData: any){
    const url: string = `${this.apiBaseUrl}/api/users/`;
    return this.http
      .post(url, formData)
  }
  public login(user: User): Promise<AuthResponse>{
    return this.makeAuthApiCall('api/login', user);
  }
  public register(user: User): Promise<AuthResponse>{
    return this.makeAuthApiCall('api/registro', user);
  }
  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse>{
  const url: string = `${this.apiBaseUrl}/${urlPath}`;
  return this.http
    .post(url, user)
    .toPromise()
    .then(response => response as AuthResponse)
    .catch(this.handleError);
 }
 private handleError(error: any): Promise<AuthResponse> {
  console.error('Something has gone wrong', error);
  return Promise.reject(error.message || error);
}

}