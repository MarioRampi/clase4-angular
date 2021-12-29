import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonComponent } from './boton.component';

describe('BotonComponent', () => {
  let component: BotonComponent;
  let fixture: ComponentFixture<BotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
