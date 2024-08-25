import {AfterViewInit, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {SettingsComponent} from "../settings/settings.component";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {NgOptimizedImage} from "@angular/common";

declare var LeaderLine: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    SettingsComponent,
    CheckboxModule,
    DropdownModule,
    NgOptimizedImage
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {
  @ViewChild('a1') a1!: ElementRef;
  @ViewChild('b1') b1!: ElementRef;
  @ViewChild('b2') b2!: ElementRef;
  @ViewChild('b3') b3!: ElementRef;
  @ViewChild('c1') c1!: ElementRef;
  @ViewChild('c2') c2!: ElementRef;
  ngAfterViewInit() {
    this.createLine(this.a1.nativeElement, this.b1.nativeElement);
    this.createLine(this.a1.nativeElement, this.b2.nativeElement);
    this.createLine(this.b1.nativeElement, this.c1.nativeElement);
    this.createLine(this.b2.nativeElement, this.c2.nativeElement);
  }

  createLine(a: any, b: any) {
    if (typeof LeaderLine === 'undefined') return;
    const line = new LeaderLine(a, b);
    line.path = "grid";
    line.color = "green";
  }
}
