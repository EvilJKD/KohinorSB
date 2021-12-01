import { Injectable } from '@angular/core';
//Import del servicio HTTP, y del servicio HTTPClient (para llamar a los métodos del servicio HTTP) al servicio discar-data
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Modulos } from 'src/app/interfaces/modulos';

@Injectable({
  providedIn: 'root'
})
export class KohinorDataServiceService {

  //private apiBaseUrl = 'http://localhost:3000';
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getModulos() {
    const url: string = `${this.apiBaseUrl}/api/modulo/`;
    return this.http.get<Modulos[]>(url)
  }
}