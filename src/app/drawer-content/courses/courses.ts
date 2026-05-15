import { Component } from '@angular/core';
import { Expander } from '../../main-content/expander/expander';

@Component({
  selector: 'app-courses',
  imports: [Expander],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {}
