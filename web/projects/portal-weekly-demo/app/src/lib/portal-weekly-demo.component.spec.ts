import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyDemo } from './portal-weekly-demo.component';

describe('WeeklyDemo', () => {
  let component: WeeklyDemo;
  let fixture: ComponentFixture<WeeklyDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
