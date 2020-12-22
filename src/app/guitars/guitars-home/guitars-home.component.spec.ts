import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarsHomeComponent } from './guitars-home.component';

describe('GuitarsHomeComponent', () => {
  let component: GuitarsHomeComponent;
  let fixture: ComponentFixture<GuitarsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
