import { Injectable } from '@angular/core';
//Import del servicio HTTP, y del servicio HTTPClient (para llamar a los métodos del servicio HTTP) al servicio discar-data
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Modulos } from 'src/app/interfaces/modulos';
import { Tickets } from 'src/app/interfaces/tickets';
import { Register } from 'src/app/interfaces/register';

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

}