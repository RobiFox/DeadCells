import {
  AfterViewInit, ApplicationRef, ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  Inject, NgZone,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SettingsComponent} from "../settings/settings.component";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {DataService} from "../data.service";
import {BiomeComponent} from "../biome/biome.component";
import {Button} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {BiomeModel} from "../biome/biome.model";

declare var LeaderLine: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    CommonModule,
    SettingsComponent,
    CheckboxModule,
    DropdownModule,
    NgOptimizedImage,
    BiomeComponent,
    Button,
    Ripple,
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  constructor(private dataService: DataService, private viewContainerRef: ViewContainerRef, private renderer: Renderer2, private cdr: ChangeDetectorRef) {
  }

  protected biomeData = [];
  @ViewChild("list") list!: ElementRef;

  ngOnInit() {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.biomeData = data;
        console.log(data.length);
      },
      error: (error) => {
        console.error(error);
        console.log(":(");
      },
      complete: () => {
        console.log("complete");
      }
    });
  }

  createLine(a: any, b: any) {
    if (typeof LeaderLine === 'undefined') return;
    const line = new LeaderLine(a, b);
    line.path = "grid";
    line.color = "#2B88B3";
  }
}
