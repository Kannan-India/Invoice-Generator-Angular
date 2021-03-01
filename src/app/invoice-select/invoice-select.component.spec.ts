import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSelectComponent } from './invoice-select.component';

describe('InvoiceSelectComponent', () => {
  let component: InvoiceSelectComponent;
  let fixture: ComponentFixture<InvoiceSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
