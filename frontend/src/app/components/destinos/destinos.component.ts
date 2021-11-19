import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { DestinosService } from '../../services/destinos.service';
import { Destino } from '../../models/destino';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {

  destinos:Destino[] = [];

  constructor(private destinosService: DestinosService) { }

  ngOnInit(): void {
    this.destinosService.getDestinos()
      .subscribe(
        data => {
          console.log(data)
          this.destinos = data;
        },
        err => console.log(err)
      )
  }

  eliminarDestino(id: any){
    this.destinosService.eliminarDestino(id).subscribe(data => {
      console.log('Destino borrado');
      this.ngOnInit();
    }, error => {
      console.log(error)
    })
  }

}
