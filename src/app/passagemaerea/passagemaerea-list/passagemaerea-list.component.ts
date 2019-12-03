import { Component, OnInit } from '@angular/core';
import { PassagemAereaService } from '../passagemaerea.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-passagemaerea-list',
  templateUrl: './passagemaerea-list.component.html',
  styleUrls: ['./passagemaerea-list.component.css']
})
export class PassagemAereaListComponent implements OnInit {

  passagensaereas: any;
  displayedColumns = ['codigo', 'preco', 'vooIda','vooVolta'];
  dataSource = new PassagemAereaDataSource(this.apiPassagemAerea);

  constructor(private apiPassagemAerea: PassagemAereaService ) { }

  ngOnInit() {
    this.apiPassagemAerea.getPassagemAereas()
      .subscribe(res => {
        console.log(res);
        this.passagensaereas = res;
      }, err => {
        console.log(err);
      });
      
  }
}

export class PassagemAereaDataSource extends DataSource<any> {
  constructor(private apiPassagemAerea: PassagemAereaService) {
    super()
  }

  connect() {
    return this.apiPassagemAerea.getPassagemAereas();
  }

  disconnect() {

  }
}
