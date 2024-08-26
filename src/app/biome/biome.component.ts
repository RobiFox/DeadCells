import { Component } from '@angular/core';
import {BiomeModel} from "./biome.model";

@Component({
  selector: 'app-biome',
  standalone: true,
  imports: [],
  templateUrl: './biome.component.html',
  styleUrl: './biome.component.scss'
})
export class BiomeComponent {
  biomeModel!: BiomeModel;
}
