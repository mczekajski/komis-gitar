import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuitarsService {

  constructor(private http: HttpClient) { }

  public getGuitars(){
    return this.http.get<Array<Object>>('/assets/data/guitars.json');
  }
}
