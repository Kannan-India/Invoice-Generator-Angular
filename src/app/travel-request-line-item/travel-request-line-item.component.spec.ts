import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRequestLineItemComponent } from './travel-request-line-item.component';

describe('TravelRequestLineItemComponent', () => {
  let component: TravelRequestLineItemComponent;
  let fixture: ComponentFixture<TravelRequestLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelRequestLineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelRequestLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
