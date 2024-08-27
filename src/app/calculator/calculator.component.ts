import {Component, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";
import {SettingsComponent} from "../settings/settings.component";
import {MapComponent} from "../map/map.component";
import {SummaryComponent} from "../summary/summary.component";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DropdownModule,
    SettingsComponent,
    MapComponent,
    SummaryComponent
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  @ViewChild('settings') settingsComponent!: SettingsComponent;
}
