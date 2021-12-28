import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTextoComponent } from './mi-texto.component';

describe('MiTextoComponent', () => {
  let component: MiTextoComponent;
  let fixture: ComponentFixture<MiTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiTextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
