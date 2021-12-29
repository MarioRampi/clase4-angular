import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButonComponent } from './buton.component';

describe('ButonComponent', () => {
  let component: ButonComponent;
  let fixture: ComponentFixture<ButonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
