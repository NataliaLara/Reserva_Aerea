import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from '../reserva.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import{EnderecoService} from '../../endereco/endereco.service';


@Component({
  selector: 'app-reserva-edit',
  templateUrl: './reserva-edit.component.html',
  styleUrls: ['./reserva-edit.component.css']
})
export class ReservaEditComponent implements OnInit {

  origens:any;
  destinos:any;
  reservaForm: FormGroup;
  id:string = '';
  pessoas:Number;
  dataIda:Date;
  dataVolta: Date;
  contatoParentesco:String;
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

  constructor(private router: Router, private route: ActivatedRoute, 
    private reservaService: ReservaService, private formBuilder: FormBuilder,
    private enderecoService: EnderecoService) {
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
    this.getReserva(this.route.snapshot.params['id']);
    this.reservaForm = this.formBuilder.group({
      'pessoas' : [null, Validators.required],
      'dataIda' : [null, Validators.required],
      'dataVolta' : [null, Validators],
      'contatoParentesco' : [null, Validators.required]
    });
  }

  getReserva(id) {
    this.reservaService.getReserva(id).subscribe(data => {
      this.id = data._id;
      this.reservaForm.setValue({
        pessoas: data.pessoas,
        dataIda: data.dataIda,
        dataVolta: data.dataVolta,
        origem: data.origem,
        destino: data.destino,
        contatoParentesco:" "
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.reservaService.updateReserva(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/reserva-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  reservaDetails() {
    this.router.navigate(['/reserva-details', this.id]);
  }
}
