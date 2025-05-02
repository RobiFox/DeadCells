import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dead-cells-calculator';
}
