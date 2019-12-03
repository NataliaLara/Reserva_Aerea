import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassagemAereaService } from '../passagemaerea.service';

@Component({
  selector: 'app-passagemaerea-detail',
  templateUrl: './passagemaerea-detail.component.html',
  styleUrls: ['./passagemaerea-detail.component.css']
})
export class PassagemAereaDetailComponent implements OnInit {

  passagemaerea = {};

  constructor(private route: ActivatedRoute, private passagemaereaService: PassagemAereaService, 
    private router: Router) { }

  ngOnInit() {
    this.getPassagemAereaDetails(this.route.snapshot.params['id']);
  }

  getPassagemAereaDetails(id) {
    this.passagemaereaService.getPassagemAerea(id)
      .subscribe(data => {
        console.log(data);
        this.passagemaerea = data;
      }   );
      console.log("oi"+this.passagemaerea);
  }

  deletePassagemAerea(id) {
    this.passagemaereaService.deletePassagemAerea(id)
      .subscribe(res => {
          this.router.navigate(['/passagensaereas']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
