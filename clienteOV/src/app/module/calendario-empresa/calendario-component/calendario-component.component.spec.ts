import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioComponentComponent } from './calendario-component.component';

describe('CalendarioComponentComponent', () => {
  let component: CalendarioComponentComponent;
  let fixture: ComponentFixture<CalendarioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
