import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {



  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion=this.countriesService.cacheStore.byRegion.region;
  }
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
