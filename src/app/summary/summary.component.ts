import { Component } from '@angular/core';
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-summary',
  standalone: true,
    imports: [
        CheckboxModule,
        DropdownModule,
        NgOptimizedImage
    ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
