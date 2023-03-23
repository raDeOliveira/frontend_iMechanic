import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMechanicComponent } from './i-mechanic.component';

describe('IMechanicComponent', () => {
  let component: IMechanicComponent;
  let fixture: ComponentFixture<IMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMechanicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
