import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  imports: [],
  selector: 'app-map',
  styles: ``,
  styleUrl: './map.css',
  templateUrl: './map.html',
})
export class Map implements OnInit, AfterViewInit {
  private map!: Leaflet.Map;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initMap();
    setTimeout(() => {
      if (this.map) {
        this.map.invalidateSize();
      }
    }, 200);
  }

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [50.36890480721421, 20.888200318686998],
      zoom: 15
    });
    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }
}
