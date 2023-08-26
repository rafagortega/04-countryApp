import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private APIUrl:string='https://restcountries.com/v3.1'
  constructor(private http:HttpClient) { }

  private getCountriesRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(()=>of([])),

    );
  }
  searchCountryByAlphaCode(code:string):Observable<Country|null>{
    const url=`${this.APIUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries=>countries.length>0 ? countries[0]:null),
      catchError(error=>of(null))
    );
  }

  searchCapital(term:string):Observable<Country[]>{
    const url=`${this.APIUrl}/capital/${term}`;
    return this.getCountriesRequest(url);
  }

  searchCountry(term:string):Observable<Country[]>{
    const url=`${this.APIUrl}/name/${term}`;
    return this.getCountriesRequest(url);
  }

  searchRegion(term:string):Observable<Country[]>{
    const url=`${this.APIUrl}/region/${term}`;
    return this.getCountriesRequest(url);
  }

}
