import {Component, Input, Optional, SkipSelf} from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {CheckboxModule} from "primeng/checkbox";
import {CalculatorComponent} from "../calculator/calculator.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    NgOptimizedImage,
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  constructor(@Optional() @SkipSelf() protected parent: CalculatorComponent) {
  }

  bossCells = [0, 1, 2, 3, 4, 5];
  selectedBossCell = 0;

  cursedChests = true;

  dlcs = {
    "spoiler": false,
    "riseOfTheGiants": true,
    "theBadSeed": false,
    "fatalFalls": false,
    "queenAndTheSea": false,
    "castlevania": false
  }
}
