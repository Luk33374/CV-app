import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Expander } from '../expander/expander';

@Component({
  selector: 'app-expander-with-list',
  imports: [Expander, MatListModule, MatIconModule],
  templateUrl: './expander-with-list.html',
  styleUrl: './expander-with-list.scss',
})
export class ExpanderWithList {
  public title = input.required<string>();
  public list = input.required<string[]>();
}
