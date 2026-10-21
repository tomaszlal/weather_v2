import { Component } from '@angular/core';
import { Events } from '../../event/Events';

@Component({
  imports: [],
  selector: 'app-current-weather',
  styles: ``,
  templateUrl: './current-weather.html',
})
export class CurrentWeather {

  constructor() {
    this.attachListeners();
  }

  private attachListeners() {
    Events.BUTTON_CLICK.on(this.clickHandler, this);
  }

  private clickHandler(e: L.LeafletMouseEvent): void {
    console.log("Map clicked at: ", e.latlng);
  }

}
