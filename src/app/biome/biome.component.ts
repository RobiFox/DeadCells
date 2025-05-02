import {Component, Input} from '@angular/core';
import {BiomeModel} from './biome.model';

@Component({
  selector: 'app-biome',
  imports: [],
  templateUrl: './biome.component.html',
  standalone: true,
  styleUrl: './biome.component.scss'
})
export class BiomeComponent {
  @Input() biomeModel!: BiomeModel;
}

