import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";
import {SettingsComponent} from "../settings/settings.component";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DropdownModule,
    SettingsComponent
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

}
