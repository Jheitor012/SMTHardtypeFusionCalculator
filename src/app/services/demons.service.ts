import { Observable } from 'rxjs';
import { DemonsModel } from './../../assets/model/all-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemonsService {
  url: any;
  constructor(private http: HttpClient) {}

  getDemons(): Observable<DemonsModel[]> {
    this.url = '../../assets/json/demons.json';
    return this.http.get<DemonsModel[]>(this.url);
  }
}
