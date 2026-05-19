import { Component, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skill-progress-bar',
  imports: [MatProgressBarModule],
  templateUrl: './skill-progress-bar.html',
  styleUrl: './skill-progress-bar.scss',
})
export class SkillProgressBar {
  public skillName = input.required<string>();
  public skillLevel = input.required<number>();
}
