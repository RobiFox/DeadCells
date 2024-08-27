import {
  Component,
  ElementRef,
  NgZone, Optional,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import {SettingsComponent} from "../settings/settings.component";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {DataService} from "../data.service";
import {BiomeComponent} from "../biome/biome.component";
import {Button} from "primeng/button";
import {Ripple} from "primeng/ripple";
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
  public linesCreated = false;
  private biomeData = [];
  @ViewChild("list") list!: ElementRef;
  @ViewChild("map") map!: ElementRef;

  constructor(private dataService: DataService, @Optional() @SkipSelf() protected parent: CalculatorComponent, private ngZone: NgZone) {
  }

  getFilteredBiomeData(): any[] {
    if (!this.parent || !this.parent.settingsComponent) {
      //return this.biomeData;
      return [];
    }
    return this.biomeData.map(stage =>
      (stage as any).filter((biome: any) => {
        if (biome.dlc !== undefined) {
          return !biome.dlc || this.parent.settingsComponent.dlcs[biome.dlc as keyof typeof this.parent.settingsComponent.dlcs];
        }
        return true;
      })
    );
  }

  ngOnInit() {
    this.dataService.getData().subscribe({
      next: (data) => {
        setTimeout(() => {
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

  ngAfterViewInit() {
    this.createLines();
    this.map.nativeElement.addEventListener('scroll', () => {});
  }

  ngAfterViewChecked() {
    this.createLines();
  }

  private lines: any[] = [];
  createLines() {
    if (!this.parent || !this.parent.settingsComponent || this.biomeData.length == 0 || typeof document === 'undefined') return;
    this.linesCreated = true;
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.lines.forEach(line => line.remove());
        this.lines = [];
        let biomes = this.getFilteredBiomeData();
        for (let stage of biomes) {
          for (let biome of stage as any) {
            if (biome.exits) {
              for (let exits of biome.exits as any) {
                if (document.getElementById(exits.biome) === null) continue;
                if(this.parent.settingsComponent.selectedBossCell < exits.cells) continue;
                this.createLine(document.getElementById(biome.id), document.getElementById(exits.biome));
              }
            }
          }
        }
      })
    });
  }

  createLine(a: any, b: any) {
    if (typeof LeaderLine === 'undefined') return;
    const line = new LeaderLine(a, b);
    line.path = "grid";
    line.color = "#2B88B3";
    this.lines.push(line);
  }
}
