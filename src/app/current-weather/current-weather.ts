import { Component, LOCALE_ID, signal } from '@angular/core';
import { Events } from '../../event/Events';
import { HttpService } from '../services/http-service';
import { Coordinates, PlaceOfLocation } from '../../types/common';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl);
@Component({
  imports: [DatePipe],
  selector: 'app-current-weather',
  styles: ``,
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
  templateUrl: './current-weather.html',
})
export class CurrentWeather {

  public placeOfLocation = signal<PlaceOfLocation | undefined>(undefined);
  public city = signal<string | undefined>(undefined);
  public weather = signal<any | undefined>(undefined);

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
    this.city.set(place?.address?.city || place?.address?.town || place?.address?.village || place?.address?.administrative);
    this.weather.set(await this.httpService.getWeather(coordinates));
    console.log(this.weather());
    console.log(this.placeOfLocation());
    console.log(this.city());

  }

}
