import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './seach-box.component.html',
  styleUrls: ['./seach-box.component.css']
})
export class SeachBoxComponent implements OnInit {
  private debouncer:Subject<string> = new Subject<string>();

  @Input()
  public placeholder:string='';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
      this.debouncer.pipe(
        debounceTime(400)
      ).subscribe(value =>  {
        this.onDebounce.emit(value);
      });
  }

  emitValue(value:string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
  }
}
function subscribe(arg0: (value: any) => void) {
  throw new Error('Function not implemented.');
}

