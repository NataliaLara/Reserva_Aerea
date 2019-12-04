import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit {

  pessoaForm: FormGroup;
  id:string = '';
  nome:string = '';
  cpf:string = '';
  email:string = '';

  constructor(private router: Router, private route: ActivatedRoute, 
    private pessoaService: PessoaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getPessoa(this.route.snapshot.params['id']);
    this.pessoaForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'cpf' : [null, Validators.required],
      'email' : [null, Validators.required]
    });
  }

  getPessoa(id) {
    this.pessoaService.getPessoa(id).subscribe(data => {
      this.id = data._id;
      this.pessoaForm.setValue({
        nome: data.nome,
        cpf: data.cpf,
        email: data.email
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.pessoaService.updatePessoa(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/pessoa-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  pessoaDetails() {
    this.router.navigate(['/pessoa-details', this.id]);
  }
}
