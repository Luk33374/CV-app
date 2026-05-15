import { Component } from '@angular/core';
import { ExpanderWithList } from '../expander-with-list/expander-with-list';
import { ListItem } from '../expander-with-list/models/list-item';

@Component({
  selector: 'app-education',
  imports: [ExpanderWithList],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected educationItems: ListItem[] = [
    {
      occupation: 'Student',
      timeSpan: '2019 - 2023',
      description:
        'WSB Academy in Cieszyn, studying Computer Science with specialization in Mobile applications',
    },
  ];
}
