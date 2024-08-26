import {AfterViewInit, Component, ElementRef, Inject, Renderer2, ViewChild} from '@angular/core';
import {SettingsComponent} from "../settings/settings.component";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {NgOptimizedImage} from "@angular/common";
import {DataService} from "../data.service";
import {BiomeComponent} from "../biome/biome.component";

declare var LeaderLine: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    SettingsComponent,
    CheckboxModule,
    DropdownModule,
    NgOptimizedImage,
    BiomeComponent
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {
  constructor(private dataService: DataService, private renderer: Renderer2) {
  }

  @ViewChild('a1', { read: ElementRef }) a1!: ElementRef;
  @ViewChild('b1', { read: ElementRef }) b1!: ElementRef;
  @ViewChild('b2', { read: ElementRef }) b2!: ElementRef;
  @ViewChild('b3', { read: ElementRef }) b3!: ElementRef;
  @ViewChild('c1', { read: ElementRef }) c1!: ElementRef;
  @ViewChild('c2', { read: ElementRef }) c2!: ElementRef;

  private biomeData: any;

  ngAfterViewInit() {
    this.createLine(this.a1.nativeElement, this.b1.nativeElement);
    this.createLine(this.a1.nativeElement, this.b2.nativeElement);
    this.createLine(this.b1.nativeElement, this.c1.nativeElement);
    this.createLine(this.b2.nativeElement, this.c2.nativeElement);

    this.dataService.getData().subscribe({
      next: (data) => {
        this.biomeData = data;
        console.log(data.length);
        for(let i = 0; i < data.length; i++) {
          console.log("i: " + i);
          for(let j = 0; j < data[i].length; j++) {
            console.log(data[i][j]);
          }
        }
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
    line.color = "green";
  }
}
