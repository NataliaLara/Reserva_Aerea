import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnderecoService } from '../endereco.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-endereco-edit',
  templateUrl: './endereco-edit.component.html',
  styleUrls: ['./endereco-edit.component.css']
})
export class EnderecoEditComponent implements OnInit {

  enderecoForm: FormGroup;
  id:string = '';
  pais:string = '';
  cidade:string = '';
  estado:string = '';
  siglaestado:string = '';

  constructor(private router: Router, private route: ActivatedRoute, 
    private enderecoService: EnderecoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEndereco(this.route.snapshot.params['id']);
    this.enderecoForm = this.formBuilder.group({
      'pais' : [null, Validators.required],
      'cidade' : [null, Validators.required],
      'estado' : [null, Validators.required],
      'siglaestado' : [null, Validators.required]
    });
  }

  getEndereco(id) {
    this.enderecoService.getEndereco(id).subscribe(data => {
      this.id = data._id;
      this.enderecoForm.setValue({
        pais: data.pais,
        cidade: data.cidade,
        estado: data.estado,
        siglaestado: data.siglaestado
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.enderecoService.updateEndereco(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/endereco-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  enderecoDetails() {
    this.router.navigate(['/endereco-details', this.id]);
  }
}
