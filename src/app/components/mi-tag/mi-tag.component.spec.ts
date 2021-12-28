import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTagComponent } from './mi-tag.component';

describe('MiTagComponent', () => {
  let component: MiTagComponent;
  let fixture: ComponentFixture<MiTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
