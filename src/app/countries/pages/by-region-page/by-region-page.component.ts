import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region="America"|"Asia"|"Europe"|"Africa"|"Oceania";

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries:Country[]=[];
  public isLoading:boolean=false;
  public regions:Region[]=["America","Asia","Europe","Africa","Oceania"];
  public selectedRegion?:Region;
  constructor(private countriesService:CountriesService){

  }

  searchByRegion(region:Region):void{
    this.isLoading=true;
    this.selectedRegion=region;
   this.countriesService.searchRegion(region)
   .subscribe(countries=>{
    this.isLoading=false;
    this.countries=countries;
   })
  }
}
