import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VooService } from '../voo.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import{EnderecoService} from '../../endereco/endereco.service';


@Component({
  selector: 'app-voo-edit',
  templateUrl: './voo-edit.component.html',
  styleUrls: ['./voo-edit.component.css']
})
export class VooEditComponent implements OnInit {

  origens:any;
  destinos:any;
  vooForm: FormGroup;
  id:string = '';
  numero:Number;
  dataPartida:Date;
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

  constructor(private router: Router, private route: ActivatedRoute, 
    private vooService: VooService, private formBuilder: FormBuilder,
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
    this.getVoo(this.route.snapshot.params['id']);
    this.vooForm = this.formBuilder.group({
      'numero' : [null, Validators.required],
      'dataPartida' : [null, Validators.required],
      'dataChegada' : [null, Validators.required],
      'passagensDisp' : [null, Validators.required],
      'origem' : [null, Validators.required],
      'destino' : [null, Validators.required]
    });
  }

  getVoo(id) {
    this.vooService.getVoo(id).subscribe(data => {
      this.id = data._id;
      this.vooForm.setValue({
        numero: data.numero,
        dataPartida: data.dataPartida,
        dataChegada: data.dataChegada,
        passagensDisp: data.passagensDisp,
        origem: data.origem,
        destino: data.destino
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.vooService.updateVoo(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/voo-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  vooDetails() {
    this.router.navigate(['/voo-details', this.id]);
  }
}
