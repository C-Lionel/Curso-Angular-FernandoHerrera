import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Region, SmallCountry } from '../interfaces/country.interfaces';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseURL: string = 'https://restcountries.com/v3.1';

  constructor(
    private http: HttpClient
  ) { }

  private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountriesByRegion( region: Region ): Observable<SmallCountry[]>  {

    if( !region ) return of([]);

    const url: string = `${this.baseURL}/region/${region}?fields=cca3,name,borders`;

    return this.http.get<SmallCountry[]>(url)
      .pipe(
        tap( response => console.log({response}) )
      )


  }


}
