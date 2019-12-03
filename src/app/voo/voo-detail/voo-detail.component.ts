import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VooService } from '../voo.service';

@Component({
  selector: 'app-voo-detail',
  templateUrl: './voo-detail.component.html',
  styleUrls: ['./voo-detail.component.css']
})
export class VooDetailComponent implements OnInit {

  voo = {};

  constructor(private route: ActivatedRoute, private vooService: VooService, 
    private router: Router) { }

  ngOnInit() {
    this.getVooDetails(this.route.snapshot.params['id']);
  }

  getVooDetails(id) {
    this.vooService.getVoo(id)
      .subscribe(data => {
        console.log(data);
        this.voo = data;
      }   );
      console.log("oi"+this.voo);
  }

  deleteVoo(id) {
    this.vooService.deleteVoo(id)
      .subscribe(res => {
          this.router.navigate(['/voos']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
