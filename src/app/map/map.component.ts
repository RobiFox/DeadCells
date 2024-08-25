import { Component } from '@angular/core';
import {SettingsComponent} from "../settings/settings.component";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    SettingsComponent,
    CheckboxModule,
    DropdownModule,
    NgOptimizedImage
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

}
