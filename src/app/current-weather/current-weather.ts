import { Component } from '@angular/core';
import { Events } from '../../event/Events';
import { HttpService } from '../services/http-service';

@Component({
  imports: [],
  selector: 'app-current-weather',
  styles: ``,
  templateUrl: './current-weather.html',
})
export class CurrentWeather {

  constructor(private httpService: HttpService) {
    this.attachListeners();
  }

  private attachListeners() {
    Events.MAP_CLICK.on(this.clickHandler, this);
  }

  private async clickHandler(e: L.LeafletMouseEvent): Promise<void> {
    console.log("Map clicked at: ", e.latlng);

    await this.httpService.getLocalizationName({lat:e.latlng.lat,lon:e.latlng.lng}).subscribe(localization =>{
        console.log(localization);
    })
  }

}
