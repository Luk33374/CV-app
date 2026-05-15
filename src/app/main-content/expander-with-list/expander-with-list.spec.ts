import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanderWithList } from './expander-with-list';

describe('ExpanderWithList', () => {
  let component: ExpanderWithList;
  let fixture: ComponentFixture<ExpanderWithList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpanderWithList],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpanderWithList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
