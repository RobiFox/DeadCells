import {Component, ViewChild} from '@angular/core';
import {MapComponent} from '../map/map.component';
import {SettingsComponent} from '../settings/settings.component';
import {SummaryComponent} from '../summary/summary.component';

@Component({
  selector: 'app-home',
  imports: [
    SettingsComponent,
    MapComponent,
    SummaryComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('settings') settingsComponent!: SettingsComponent;
  @ViewChild('map') mapsComponent!: MapComponent;
}
