import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../reserva.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import{EnderecoService} from '../../endereco/endereco.service';

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
    this.reservaForm = this.formBuilder.group({
      'pessoas' : [null, Validators.required],
      'dataIda' : [null, Validators.required],
      'dataVolta' : [null, Validators],
      'origem' : [null, Validators.required],
      'destino' : [null, Validators.required],

    });
  }

  validaCidade(){
    if(this.origem.cidade==this.destino.cidade){
      console.log("inválido!")
    }
  }

  onFormSubmit(form:NgForm) {
    this.reservaService.postReserva(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/reserva-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
