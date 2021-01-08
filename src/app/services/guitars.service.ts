import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

export interface Guitar {
  "company": string,
  "model": string,
  "series": string,
  "year": number,
  "imageUrl": string,
  "description": string,
  "price": number,
  "sold": boolean
}

interface Guitars {
  guitars: Array<Guitar>;
};

@Injectable({
  providedIn: 'root'
})
export class GuitarsService {

  constructor(private http: HttpClient) {}

  public getGuitars(){
    return this.http.get<Guitars>('assets/data/guitars.json').pipe(
      pluck('guitars')
    )
  }
}
