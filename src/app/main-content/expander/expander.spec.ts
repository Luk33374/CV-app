import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expander } from './expander';

describe('Summary', () => {
  let component: Expander;
  let fixture: ComponentFixture<Expander>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expander],
    }).compileComponents();

    fixture = TestBed.createComponent(Expander);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
