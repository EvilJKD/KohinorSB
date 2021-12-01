import { Component, OnInit } from '@angular/core';
import { Modulos } from 'src/app/interfaces/modulos';
import { KohinorDataServiceService } from 'src/app/services/kohinor-data-service.service';

@Component({
  selector: 'app-funcion-page',
  templateUrl: './funcion-page.component.html',
  styleUrls: ['./funcion-page.component.css']
})
export class FuncionPageComponent implements OnInit {
  public modulos: Modulos[] = [];
  

  constructor(private KohinorDataServiceService: KohinorDataServiceService) { }
  private getData(): void {
    console.log('Obteniendo funcionalidades de la base')
    this.KohinorDataServiceService
      .getModulos()
      .subscribe({
        next:(data) => {
        this.modulos = data
      },
      error:(e)=>{
        console.error(e);
      }
      });
  }
  ngOnInit(): void {
    this.getData();
  }

}

