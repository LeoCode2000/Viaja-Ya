import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getDestinos(): Observable<any>{
    return this.http.get(this.URL + '/destinos');
  }

  getTop(){
    return this.http.get<any>(this.URL + '/top');
  }

  eliminarDestino(id: string): Observable<any>{
      return this.http.delete(this.URL + id);
  }
}
