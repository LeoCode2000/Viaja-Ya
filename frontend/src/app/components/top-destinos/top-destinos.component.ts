import { Component, OnInit } from '@angular/core';
import { DestinosService } from '../../services/destinos.service';
import { Destino } from '../../models/destino';

@Component({
  selector: 'app-top-destinos',
  templateUrl: './top-destinos.component.html',
  styleUrls: ['./top-destinos.component.css']
})
export class TopDestinosComponent implements OnInit {

  destinos:Destino[] = [];

  constructor(private destinosService: DestinosService) { }

  ngOnInit(): void {
    this.destinosService.getDestinos()
      .subscribe(
        res => {
          console.log(res)
          this.destinos = res;
        },
        err => console.log(err)
      )
  }

}
