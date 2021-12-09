import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Tickets } from 'src/app/interfaces/tickets';
import { KohinorDataServiceService } from 'src/app/services/kohinor-data-service.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit, AfterViewInit {
  public tickets: Tickets[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<void> = new Subject();


  constructor(private KohinorDataServiceService: KohinorDataServiceService) { }
  private getData(): void {
    console.log('Obteniendo tickets de la base')
    this.KohinorDataServiceService
      .getTickets()
      .subscribe({
        next:(data) => {
        this.tickets = data;
        //this.dtTrigger.next();
      },
      error:(e)=>{
        console.error(e);
      }
      });
  }

  ngOnInit(): void {
    
    this.getData();

    setTimeout(() => {
      $('.tablaTickets').DataTable({
         pagingType: 'full_numbers',
         pageLength: 5,
         processing: true,
         lengthMenu: [5, 10, 25],
         order: [
            [1, "desc"]
         ]
      });
   }, 500);
  }
  ngAfterViewInit(): void{
    this.dtTrigger.next();
  }

}
