import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-summary',
  imports: [MatExpansionModule],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class Summary {}
