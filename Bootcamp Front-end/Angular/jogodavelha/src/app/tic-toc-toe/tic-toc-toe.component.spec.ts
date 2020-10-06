import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTocToeComponent } from './tic-toc-toe.component';

describe('TicTocToeComponent', () => {
  let component: TicTocToeComponent;
  let fixture: ComponentFixture<TicTocToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTocToeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTocToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
