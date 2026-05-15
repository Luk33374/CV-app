import { Component } from '@angular/core';
import { Expander } from '../expander/expander';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-experience',
  imports: [Expander, MatListModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected experienceItems = ['Item 1', 'Item 2', 'Item 3'];
}
