import { Component, OnInit } from '@angular/core';
import { Tickets } from 'src/app/interfaces/tickets';
import { KohinorDataServiceService } from 'src/app/services/kohinor-data-service.service';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit {
  public tickets: Tickets[] = [];

  constructor(private KohinorDataServiceService: KohinorDataServiceService) { }
  private getData(): void {
    console.log('Obteniendo tickets de la base')
    this.KohinorDataServiceService
      .getTickets()
      .subscribe({
        next:(data) => {
        this.tickets = data
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
