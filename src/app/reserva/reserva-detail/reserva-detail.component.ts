import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit {

  reserva = {};

  constructor(private route: ActivatedRoute, private reservaService: ReservaService, 
    private router: Router) { }

  ngOnInit() {
    this.getReservaDetails(this.route.snapshot.params['id']);
  }

  getReservaDetails(id) {
    this.reservaService.getReserva(id)
      .subscribe(data => {
        console.log(data);
        this.reserva = data;
      }   );
      console.log("oi"+this.reserva);
  }

  deleteReserva(id) {
    this.reservaService.deleteReserva(id)
      .subscribe(res => {
          this.router.navigate(['/reservas']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
