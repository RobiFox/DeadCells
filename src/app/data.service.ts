import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = "assets/data/biomes.json"
  private biomeData: any;
  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    if(this.biomeData) {
      return of(this.biomeData);
    }
    return this.http.get<any>(this.jsonUrl).pipe(tap(response => this.biomeData = response));
  }
}
