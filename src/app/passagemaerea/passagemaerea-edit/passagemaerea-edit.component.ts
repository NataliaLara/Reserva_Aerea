import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PassagemAereaService } from '../passagemaerea.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import{VooService} from '../../voo/voo.service';


@Component({
  selector: 'app-passagemaerea-edit',
  templateUrl: './passagemaerea-edit.component.html',
  styleUrls: ['./passagemaerea-edit.component.css']
})
export class PassagemAereaEditComponent implements OnInit {

  id:string = '';
  idas:any;
  voltas:any;
  passagemaereaForm: FormGroup;
  codigo:Number;
  preco: Number;

  vooIda:{
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
  vooVolta:{
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

  constructor(private router: Router, private route: ActivatedRoute, 
    private passagemaereaService: PassagemAereaService, private formBuilder: FormBuilder,
    private vooService: VooService) {
      this.vooService.getVoos()
      .subscribe(res => {
        console.log(res);
        this.idas = res;
        this.voltas = res;
      }, err => {
        console.log(err);
      });
     }

  ngOnInit() {
    this.getPassagemAerea(this.route.snapshot.params['id']);
    this.passagemaereaForm = this.formBuilder.group({
      'codigo' : [null, Validators.required],
      'preco' : [null, Validators.required],
      'vooIda' : [null, Validators.required],
      'vooVolta' : [null, Validators],
    });
  }

  getPassagemAerea(id) {
    this.passagemaereaService.getPassagemAerea(id).subscribe(data => {
      this.id = data._id;
      this.passagemaereaForm.setValue({
        codigo: data.codigo,
        preco: data.preco,
        vooIda:data.vooIda,
        vooVolta: data.vooVolta
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.passagemaereaService.updatePassagemAerea(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/passagemaerea-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  passagemaereaDetails() {
    this.router.navigate(['/passagemaerea-details', this.id]);
  }
}
