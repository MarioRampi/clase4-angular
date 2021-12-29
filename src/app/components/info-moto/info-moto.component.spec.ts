import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMotoComponent } from './info-moto.component';

describe('InfoMotoComponent', () => {
  let component: InfoMotoComponent;
  let fixture: ComponentFixture<InfoMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
