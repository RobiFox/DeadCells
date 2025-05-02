import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomeComponent } from './biome.component';

describe('BiomeComponent', () => {
  let component: BiomeComponent;
  let fixture: ComponentFixture<BiomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
