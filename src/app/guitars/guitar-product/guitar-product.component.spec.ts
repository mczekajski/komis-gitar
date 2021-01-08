import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarProductComponent } from './guitar-product.component';

describe('GuitarProductComponent', () => {
  let component: GuitarProductComponent;
  let fixture: ComponentFixture<GuitarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
