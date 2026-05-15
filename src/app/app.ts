import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Heading } from './main-content/heading/heading';
import { Expander } from './main-content/expander/expander';
import { Experience } from './main-content/experience/experience';
import { Education } from './main-content/education/education';

@Component({
  selector: 'app-root',
  imports: [MatSidenavModule, Heading, Expander, Experience, Education],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('CV-app');
}
