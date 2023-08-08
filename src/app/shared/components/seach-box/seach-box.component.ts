import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './seach-box.component.html',
  styleUrls: ['./seach-box.component.css']
})
export class SeachBoxComponent {
  @Input()
  public placeholder:string='';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value:string):void{
    this.onValue.emit(value);
  }
}
