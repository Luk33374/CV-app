import { Component } from '@angular/core';
import { ExpanderWithList } from '../expander-with-list/expander-with-list';

@Component({
  selector: 'app-education',
  imports: [ExpanderWithList],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected educationItems = [
    '2019 - 2023: WSB Academy in Cieszyn, studying Computer Science with specialization in Mobile applications',
  ];
}
