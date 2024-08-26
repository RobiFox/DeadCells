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
export class MapComponent implements AfterViewInit {
  constructor(private dataService: DataService, private viewContainerRef: ViewContainerRef, private renderer: Renderer2, private cdr: ChangeDetectorRef) {
  }

  protected biomeData: any;
  @ViewChild("list") list!: ElementRef;

  ngAfterViewInit() {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.biomeData = data;
        console.log(data.length);
        for (let i = 0; i < data.length; i++) {
          const divElement = this.renderer.createElement('div');
          this.renderer.addClass(divElement, "element");
          this.renderer.appendChild(this.list.nativeElement, divElement);
          for (let j = 0; j < data[i].length; j++) {
            let biomeComponent: ComponentRef<BiomeComponent> = this.viewContainerRef.createComponent(BiomeComponent);
            //biomeComponent.instance.biomeModel = data[i][j];
            biomeComponent.setInput("biomeModel", data[i][j]);
            this.cdr.detectChanges();
            this.renderer.appendChild(divElement, biomeComponent.location.nativeElement);
          }
          console.log("added");
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
    line.color = "#2B88B3";
  }
}
