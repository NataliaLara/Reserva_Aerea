import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

  reservas: any;
  displayedColumns = ['pessoas', 'origem', 'destino','dataIda','dataVolta'];
  dataSource = new ReservaDataSource(this.apiReserva);

  constructor(private apiReserva: ReservaService ) { }

  ngOnInit() {
    this.apiReserva.getReservas()
      .subscribe(res => {
        console.log(res);
        this.reservas = res;
      }, err => {
        console.log(err);
      });
      
  }
}

export class ReservaDataSource extends DataSource<any> {
  constructor(private apiReserva: ReservaService) {
    super()
  }

  connect() {
    return this.apiReserva.getReservas();
  }

  disconnect() {

  }
}
