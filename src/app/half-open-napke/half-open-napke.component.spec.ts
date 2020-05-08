import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfOpenNapkeComponent } from './half-open-napke.component';

describe('HalfOpenNapkeComponent', () => {
  let component: HalfOpenNapkeComponent;
  let fixture: ComponentFixture<HalfOpenNapkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfOpenNapkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfOpenNapkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
