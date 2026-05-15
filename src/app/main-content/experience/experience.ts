import { Component } from '@angular/core';
import { Expander } from '../expander/expander';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  imports: [Expander, MatListModule, MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected experienceItems = [
    'Today - 2023: Angular Developer in Digital Technology Poland, DTP Ltd. I was mostly responsible for developing and maintaining the front-end of web applications using Angular and related technologies. The project which I was involved in focused on delivering high-quality software solutions to clients from AI sectors. The project was mostly focused on solutions for calculating heat dissipation in AI data centers.',
    'Item 2',
    'Item 3',
  ];
}
