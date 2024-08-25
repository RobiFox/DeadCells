import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";
import {SettingsComponent} from "../settings/settings.component";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DropdownModule,
    SettingsComponent,
    MapComponent
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

}
