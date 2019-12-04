import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import {VooService} from '../../voo/voo.service'

@Component({
  selector: 'app-reserva-voo',
  templateUrl: './reserva-voo.component.html',
  styleUrls: ['./reserva-voo.component.css']
})
export class ReservaVooComponent implements OnInit {

  reservas: any;
  voos:any;
  displayedColumns = ['origem', 'destino','dataIda','dataVolta'];
  dataSource = new VooDataSource(this.vooService);

  constructor(private apiReserva: ReservaService,private vooService:VooService ) { 
    
  }

  ngOnInit() {
    this.apiReserva.getReservas()
      .subscribe(res => {
        console.log(res);
        this.reservas = res;
      }, err => {
        console.log(err);
      });

      this.vooService.getVoos()
      .subscribe(res => {
        console.log(res);
        this.voos = res;
      }, err => {
        console.log(err);
      });
      
  }
}

export class VooDataSource extends DataSource<any> {
  constructor(private apiVoo: VooService) {
    super()
  }

  connect() {
    return this.apiVoo.getVoos();
  }

  disconnect() {

  }
}
