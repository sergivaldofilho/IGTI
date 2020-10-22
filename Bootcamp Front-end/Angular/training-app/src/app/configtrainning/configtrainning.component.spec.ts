import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigtrainningComponent } from './configtrainning.component';

describe('ConfigtrainningComponent', () => {
  let component: ConfigtrainningComponent;
  let fixture: ComponentFixture<ConfigtrainningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigtrainningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigtrainningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
