import { Component } from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  bossCells = [0, 1, 2, 3, 4, 5];
  selectedBossCell = 0;
}
