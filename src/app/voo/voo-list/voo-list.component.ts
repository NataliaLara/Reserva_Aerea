import { Component, OnInit } from '@angular/core';
import { VooService } from '../voo.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-voo-list',
  templateUrl: './voo-list.component.html',
  styleUrls: ['./voo-list.component.css']
})
export class VooListComponent implements OnInit {

  voos: any;
  displayedColumns = ['numero', 'dataPartida', 'dataChegada','passagensDisp','origem','destino'];
  dataSource = new VooDataSource(this.apiVoo);

  constructor(private apiVoo: VooService ) { }

  ngOnInit() {
    this.apiVoo.getVoos()
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
