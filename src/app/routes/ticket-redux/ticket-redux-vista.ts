import { Component } from "@angular/core";
import { TicketComponent } from "../../ticketRedux/components/ticket.component";


@Component({
  selector: 'app-ticket-vista',
  standalone: true,
  imports: [TicketComponent],
  template:`
  <app-ticket-component/>
  `,
})
export class TicketVista{

}
