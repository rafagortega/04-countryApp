import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './seach-box.component.html',
  styleUrls: ['./seach-box.component.css']
})
export class SeachBoxComponent {
  @Input()
  public placeholder:string='';
}
