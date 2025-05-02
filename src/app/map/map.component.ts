import {AfterViewInit, Component, ElementRef, NgZone, OnInit, Optional, SkipSelf, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {HomeComponent} from '../home/home.component';
import LinkerLine from 'linkerline';
import {BiomeComponent} from '../biome/biome.component';
import {Button} from 'primeng/button';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-map',
  imports: [
    BiomeComponent,
    Button,
    NgForOf
  ],
  templateUrl: './map.component.html',
  standalone: true,
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit, AfterViewInit {
  public linesCreated = false;
  private biomeData = [];
  private lines: LinkerLine<any, any, "grid">[] = [];
  @ViewChild("list") list!: ElementRef;
  @ViewChild("map") map!: ElementRef;

  constructor(private dataService: DataService, @Optional() @SkipSelf() protected parent: HomeComponent, private ngZone: NgZone) {
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
      }
    });
  }
  ngAfterViewInit() {
    this.createLines();
    /*this.map.nativeElement.addEventListener('scroll', () => {
      LinkerLine.positionAll();
    });*/
  }

  getFilteredBiomeData(): any[] {
    if (!this.parent || !this.parent.settingsComponent) {
      //return this.biomeData;
      return [];
    }
    return this.biomeData.map(stage =>
      (stage as any).filter((biome: any) => {
        if (biome.dlc !== undefined) {
          return !biome.dlc || this.parent.settingsComponent.dlc[biome.dlc as keyof typeof this.parent.settingsComponent.dlc];
        }
        return true;
      })
    );
  }

  ngAfterViewChecked() {
    this.createLines();
  }

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
    if (typeof LinkerLine === 'undefined') return;
    const line = new LinkerLine({
      start: a,
      end: b,
      path: "grid",
      color: "#2B88B3",
      parent: this.map.nativeElement,

    });
    this.lines.push(line);
  }
}
