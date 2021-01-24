import { Observable } from 'rxjs';
import { DemonsModel, MagatamaModel } from './../../assets/model/all-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemonsService {
  demonUrl: any;
  magatamaUrl: any;
  constructor(private http: HttpClient) {}

  getDemons(): Observable<DemonsModel[]> {
    this.demonUrl = '../../assets/json/demons.json';
    return this.http.get<DemonsModel[]>(this.demonUrl);
  }

  getMagatama(): Observable<MagatamaModel[]> {
    this.magatamaUrl = '../../assets/json/magatama.json';
    return this.http.get<MagatamaModel[]>(this.magatamaUrl);
  }
}
