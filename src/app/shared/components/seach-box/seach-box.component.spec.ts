import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachBoxComponent } from './seach-box.component';

describe('SeachBoxComponent', () => {
  let component: SeachBoxComponent;
  let fixture: ComponentFixture<SeachBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeachBoxComponent]
    });
    fixture = TestBed.createComponent(SeachBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
