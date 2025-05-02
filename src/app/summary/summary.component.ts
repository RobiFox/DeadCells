import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-summary',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './summary.component.html',
  standalone: true,
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
