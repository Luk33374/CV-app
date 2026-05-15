import { Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-expander',
  imports: [MatExpansionModule],
  templateUrl: './expander.html',
  styleUrl: './expander.scss',
})
export class Expander {
  public title = input.required<string>();
}
