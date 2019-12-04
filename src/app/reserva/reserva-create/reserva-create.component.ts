import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../reserva.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import{EnderecoService} from '../../endereco/endereco.service';

import {ValidatorFn } from '@angular/forms';
//import {AbstractControl } from '../../../node_modules/@angular/forms/src/model';


@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css']
})
export class ReservaCreateComponent implements OnInit {
  origens:any;
  destinos:any;
  reservaForm: FormGroup;
  pessoas:Number;
  dataIda: Date;
  dataVolta:Date;

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


  constructor(private router: Router, private reservaService: ReservaService, 
    private formBuilder: FormBuilder, private enderecoService: EnderecoService
) { 
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
    this.reservaForm = this.formBuilder.group({
      'pessoas' : [null, Validators.required],
      'dataIda' : [null, Validators.required],
      'dataVolta' : [null, Validators],
      'origem' : [null, Validators.required],
      'destino' : [null, Validators.required],  
      validator: ReservaCreateComponent.equalControlValue('origem','destino')
    });
  }

  static equalControlValue(targetKey: string, toMatchKey: string): ValidatorFn {

    return (group: FormGroup): { [key: string]: any } => {

      const target = group.controls[ targetKey ];
      const toMatch = group.controls[ toMatchKey ];
      if (target.touched && toMatch.touched) {

        const isMatch = target.value === toMatch.value;

        // set equal value error on dirty controls
        if (!isMatch && target.valid && toMatch.valid) {
          toMatch.setErrors({ equalValue: targetKey });
          const message = targetKey + ' diferente de ' + toMatchKey;
          return { 'equalValue': message };
        }

        if (isMatch && toMatch.hasError('equalControlValue')) {
          toMatch.setErrors(null);
        }
      }

      return null;
    };
  }


  validaCidade(){
    if(this.origem==this.destino){
      console.log("inválido!")
      
    }else
    {
      console.log("válido")
    }
  }

  onFormSubmit(form:NgForm) {
    /*
    this.reservaService.postReserva(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/reserva-details', id]);
        }, (err) => {
          console.log(err);
        });*/
      this.reservaService.postReserva(form)
      .subscribe(res => {
          this.router.navigate(['/passagensaereas']);
        }, (err) => {
          console.log(err);
        });


  }

}
