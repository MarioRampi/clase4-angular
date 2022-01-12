import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisItemComponent } from './pais-item.component';

describe('PaisItemComponent', () => {
  let component: PaisItemComponent;
  let fixture: ComponentFixture<PaisItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
