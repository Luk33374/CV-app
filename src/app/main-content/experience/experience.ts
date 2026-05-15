import { Component } from '@angular/core';
import { ExpanderWithList } from '../expander-with-list/expander-with-list';

@Component({
  selector: 'app-experience',
  imports: [ExpanderWithList],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected experienceItems = [
    '2023 - Present: Angular Developer at Digital Technology Poland (DTP Ltd.), working on a project for Rittal. I was primarily responsible for developing and maintaining the front end of web applications using Angular and related technologies. The project focused on delivering high-quality software solutions for clients in the AI sector, particularly tools for calculating heat dissipation in AI data centers.',
    '2022–2023: Frontend Developer at Comernal Software. I was responsible for developing and maintaining an application for organizing the production of electrical cabinets.',
    '2022–2021: Intern at Eplan. Gained experience in agile methodologies and worked in quality assurance, contributing to test automation using Protractor and Cypress.',
  ];
}
