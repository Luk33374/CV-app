import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillProgressBar } from './skill-progress-bar';

describe('SkillProgressBar', () => {
  let component: SkillProgressBar;
  let fixture: ComponentFixture<SkillProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillProgressBar],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillProgressBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
