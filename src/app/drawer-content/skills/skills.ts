import { Component } from '@angular/core';
import { Expander } from '../../main-content/expander/expander';
import { SkillProgressBar } from '../skill-progress-bar/skill-progress-bar';
import { SkillLevels } from './model/skill-levels';

@Component({
  selector: 'app-skills',
  imports: [Expander, SkillProgressBar],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected skillSet: SkillLevels[] = [
    { skill: 'Angular', level: 70 },
    { skill: 'TypeScript', level: 80 },
    { skill: 'RxJS', level: 75 },
    { skill: 'HTML', level: 90 },
    { skill: 'CSS', level: 85 },
    { skill: 'JavaScript', level: 80 },
    { skill: 'Angular Signals', level: 60 },
    { skill: 'Cypress', level: 70 },
    { skill: 'Protractor', level: 65 },
    { skill: 'Jasmine', level: 75 },
    { skill: 'Vitest', level: 30 },
    { skill: 'Jenkins', level: 20 },
    { skill: '.Net', level: 40 },
    { skill: 'C#', level: 50 },
  ];
}
