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
    'Today – 2023: Angular Developer at Digital Technology Poland (DTP Ltd.), working on a project for Rittal. I was primarily responsible for developing and maintaining the front end of web applications using Angular and related technologies. The project focused on delivering high-quality software solutions for clients in the AI sector, particularly tools for calculating heat dissipation in AI data centers.',
    '2023–2022: Frontend Developer at Comernal Software. I was responsible for developing and maintaining an application for organizing the production of electrical cabinets.',
    '2021–2022: Intern at Eplan. Gained experience in agile methodologies and worked in quality assurance, contributing to test automation using Protractor and Cypress.',
  ];
}
