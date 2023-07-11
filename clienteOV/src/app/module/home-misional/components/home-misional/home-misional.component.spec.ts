import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMisionalComponent } from './home-misional.component';

describe('HomeMisionalComponent', () => {
  let component: HomeMisionalComponent;
  let fixture: ComponentFixture<HomeMisionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMisionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMisionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
