import { Component, computed, signal, WritableSignal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Heading } from './main-content/heading/heading';
import { Expander } from './main-content/expander/expander';
import { Experience } from './main-content/experience/experience';
import { Education } from './main-content/education/education';
import { Skills } from './drawer-content/skills/skills';
import { Courses } from './drawer-content/courses/courses';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    Heading,
    Expander,
    Experience,
    Education,
    Skills,
    Courses,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected expanderOpened: WritableSignal<boolean> = signal(true);
  protected buttonText = computed(() => (this.expanderOpened() ? 'Close' : 'Open'));
  protected readonly title = signal('CV-app');

  protected toggleExpander() {
    this.expanderOpened.set(!this.expanderOpened());
  }
}
