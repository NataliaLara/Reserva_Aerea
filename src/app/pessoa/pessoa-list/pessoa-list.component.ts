import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  pessoas: any;
  displayedColumns = ['nome', 'cpf', 'email',];
  dataSource = new PessoaDataSource(this.pessoaService);

  constructor(private pessoaService: PessoaService ) { }

  ngOnInit() {
    this.pessoaService.getPessoas()
      .subscribe(res => {
        console.log(res);
        this.pessoas = res;
      }, err => {
        console.log(err);
      });
      
  }
}

export class PessoaDataSource extends DataSource<any> {
  constructor(private pessoaService: PessoaService) {
    super()
  }

  connect() {
    return this.pessoaService.getPessoas();
  }

  disconnect() {

  }
}
