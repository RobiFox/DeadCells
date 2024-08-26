import {
  AfterViewInit, ApplicationRef, ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  Inject, NgZone, Optional,
  Renderer2, SkipSelf,
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
import {CalculatorComponent} from "../calculator/calculator.component";

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
  constructor(private dataService: DataService, @Optional() @SkipSelf() private parent: CalculatorComponent, private ngZone: NgZone) {
  }

  private biomeData = [];
  @ViewChild("list") list!: ElementRef;

  getFilteredBiomeData() : any[] {
    if (!this.parent || !this.parent.settingsComponent) {
      return this.biomeData;
    }
    return this.biomeData.map(stage =>
      (stage as any).filter((biome: any) => {
        if(biome.dlc !== undefined) {
          return !biome.dlc || this.parent.settingsComponent.dlcs[biome.dlc as keyof typeof this.parent.settingsComponent.dlcs];
        }
        return true;
      })
    );
  }

  ngOnInit() {
    this.dataService.getData().subscribe({
      next: (data) => {
        setTimeout(() => { // Defer the change detection
          this.biomeData = data;
          console.log(data.length);
        }, 0);
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
