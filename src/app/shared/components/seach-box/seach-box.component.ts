import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './seach-box.component.html',
  styleUrls: ['./seach-box.component.css']
})
export class SeachBoxComponent implements OnInit,OnDestroy {

  private debouncer:Subject<string> = new Subject<string>();
  private debouncerSuscription?:Subscription;

  @Input()
  public initialValue:string="";

  @Input()
  public placeholder:string='';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
      this.debouncerSuscription=this.debouncer
      .pipe(
        debounceTime(400)
      ).subscribe(value =>  {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
   this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value:string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
  }
}


