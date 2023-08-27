import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public initialValue:string="";

  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCountries.countries;
    this.initialValue=this.countriesService.cacheStore.byCountries.term;
  }
  public countries:Country[]=[];
  public isLoading:boolean=false;
  constructor(private countriesService:CountriesService){

  }

  searchByCountry(term:string):void{
    this.isLoading=true;
   this.countriesService.searchCountry(term)
   .subscribe(countries=>{
    this.isLoading=false;
    this.countries=countries;
   })
  }
}
