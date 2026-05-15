import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Heading } from './main-content/heading/heading';
import { Expander } from './main-content/expander/expander';
import { Experience } from './main-content/experience/experience';

@Component({
  selector: 'app-root',
  imports: [MatSidenavModule, Heading, Expander, Experience],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('CV-app');
}
