import { Component, signal } from '@angular/core';
import { Events } from '../../event/Events';
import { HttpService } from '../services/http-service';
import { Coordinates, PlaceOfLocation } from '../../types/common';

@Component({
  imports: [],
  selector: 'app-current-weather',
  styles: ``,
  templateUrl: './current-weather.html',
})
export class CurrentWeather {

  public placeOfLocation = signal<PlaceOfLocation | undefined>(undefined);

  constructor(private httpService: HttpService) {
    this.attachListeners();
  }

  private attachListeners() {
    Events.MAP_CLICK.on(this.clickHandler, this);
  }

  private async clickHandler(e: L.LeafletMouseEvent): Promise<void> {
    console.log("Map clicked at: ", e.latlng);

    const coordinates: Coordinates = { lat: e.latlng.lat, lon: e.latlng.lng };
    const place = await this.httpService.getLocationName(coordinates);
    this.placeOfLocation.set(place);
    console.log(this.placeOfLocation);



  }

}
