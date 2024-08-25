import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

}
