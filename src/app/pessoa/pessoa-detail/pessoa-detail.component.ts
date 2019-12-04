import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.css']
})
export class PessoaDetailComponent implements OnInit {

  pessoa = {};

  constructor(private route: ActivatedRoute, private pessoaService: PessoaService, 
    private router: Router) { }

  ngOnInit() {
    this.getPessoaDetails(this.route.snapshot.params['id']);
  }

  getPessoaDetails(id) {
    this.pessoaService.getPessoa(id)
      .subscribe(data => {
        console.log(data);
        this.pessoa = data;
      }   );
      console.log("oi"+this.pessoa);
  }

  deletePessoa(id) {
    this.pessoaService.deletePessoa(id)
      .subscribe(res => {
          this.router.navigate(['/pessoas']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
