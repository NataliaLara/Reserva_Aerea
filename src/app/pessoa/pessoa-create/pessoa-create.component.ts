import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  pessoaForm: FormGroup;
  nome:string='';
  cpf:string='';
  email:string='';

  constructor(private router: Router, private pessoaService: PessoaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pessoaForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'cpf' : [null, Validators.required],
      'email' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.pessoaService.postPessoa(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/pessoa-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
