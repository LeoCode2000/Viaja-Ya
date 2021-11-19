import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Destino } from 'src/app/models/destino';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-destino',
  templateUrl: './crear-destino.component.html',
  styleUrls: ['./crear-destino.component.css']
})
export class CrearDestinoComponent implements OnInit {

  destinoForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.destinoForm = this.fb.group({
        name:['', Validators.required],
        description:['', Validators.required],
        ubication:['', Validators.required],
        price:['', Validators.required],

    })
   }

  ngOnInit(): void {
  }

  agregarDestino(){
    console.log(this.destinoForm)

    const DESTINO: Destino = {
      name: this.destinoForm.get('name')?.value,
      description: this.destinoForm.get('description')?.value,
      ubication: this.destinoForm.get('ubication')?.value,
      price: this.destinoForm.get('price')?.value,
    }

    console.log(DESTINO);
    this.router.navigate(['/top']);
  }

}
