import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconRoundComponent } from './button-icon-round.component';

describe('BtnIconRoundComponent', () => {
  let component: ButtonIconRoundComponent;
  let fixture: ComponentFixture<ButtonIconRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonIconRoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIconRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
