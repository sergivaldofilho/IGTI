import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDatabidingComponent } from './counter-databiding.component';

describe('CounterDatabidingComponent', () => {
  let component: CounterDatabidingComponent;
  let fixture: ComponentFixture<CounterDatabidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDatabidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDatabidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
