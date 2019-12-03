import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VooService } from '../voo.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import{EnderecoService} from '../../endereco/endereco.service';

@Component({
  selector: 'app-voo-create',
  templateUrl: './voo-create.component.html',
  styleUrls: ['./voo-create.component.css']
})
export class VooCreateComponent implements OnInit {

  origens:any;
  destinos:any;
  vooForm: FormGroup;
  numero: Number;
  dataPartida: Date;
  dataChegada: Date;
  passagensDisp: Number;

  origem:{
    pais: String, 
    cidade: String, 
    estado: String, 
    siglaestado:String,
  }
  destino:{
    pais: String, 
    cidade: String, 
    estado: String, 
    siglaestado:String,
  }


  constructor(private router: Router, private vooService: VooService, 
    private formBuilder: FormBuilder, private enderecoService: EnderecoService) { 
      this.enderecoService.getEnderecos()
      .subscribe(res => {
        console.log(res);
        this.origens = res;
        this.destinos = res;
      }, err => {
        console.log(err);
      });
    }

  ngOnInit() {
    this.vooForm = this.formBuilder.group({
      'numero' : [null, Validators.required],
      'dataPartida' : [null, Validators.required],
      'dataChegada' : [null, Validators.required],
      'passagensDisp' : [null, Validators.required],
      'origem' : [null, Validators.required],
      'destino' : [null, Validators.required],

    });
  }

  onFormSubmit(form:NgForm) {
    this.vooService.postVoo(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/voo-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
