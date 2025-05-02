import { Component } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {Checkbox} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [
    DropdownModule,
    Checkbox,
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './settings.component.html',
  standalone: true,
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  bossCells = [0, 1, 2, 3, 4, 5];
  selectedBossCell = 0;

  cursedChests = true;

  dlc = {
    "spoiler": false,
    "riseOfTheGiants": true,
    "theBadSeed": false,
    "fatalFalls": false,
    "queenAndTheSea": false,
    "castlevania": false
  }
}
