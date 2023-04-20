import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  
  idGonza = 1;
  URL = 'http://localhost:8080/persona/';


  constructor(private http:HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+`detail/${this.idGonza}`)
  }

  obtenerDatos():Observable<any>{
    return this.http.get('../../assets/data/data.json');
  }
}
