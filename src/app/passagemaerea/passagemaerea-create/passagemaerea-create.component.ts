import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassagemAereaService } from '../passagemaerea.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import{VooService} from '../../voo/voo.service';

@Component({
  selector: 'app-passagemaerea-create',
  templateUrl: './passagemaerea-create.component.html',
  styleUrls: ['./passagemaerea-create.component.css']
})
export class PassagemAereaCreateComponent implements OnInit {

  voos:any;
  passagemaereaForm: FormGroup;
  codigo:Number;
  preco: Number;

  voo:{
    numero: Number,
    dataPartida: Date,
    dataChegada: Date,
    passagensDisp: Number,
    origem:{
      pais: { type: String, default: 'Brasil' },
      cidade: { type: String, default: 'São Paulo' },
      estado: { type: String, default: 'São Paulo' },
      siglaestado: { type: String, default: 'SP' }
    },
    destino:{
      pais: { type: String, default: 'Brasil' },
      cidade: { type: String, default: 'Belo Horizonte' },
      estado: { type: String, default: 'Minas Gerais' },
      siglaestado: { type: String, default: 'MG' }
    }
  };


  constructor(private router: Router, private passagemaereaService: PassagemAereaService, 
    private formBuilder: FormBuilder, private vooService: VooService) { 
      this.vooService.getVoos()
      .subscribe(res => {
        console.log(res);
        this.voos = res;
      }, err => {
        console.log(err);
      });
    }

  ngOnInit() {
    this.passagemaereaForm = this.formBuilder.group({
      'codigo' : [null, Validators.required],
      'preco' : [null, Validators.required],
      'voo' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.passagemaereaService.postPassagemAerea(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/passagemaerea-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
