import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Map } from './map/map';
import { CurrentWeather } from './current-weather/current-weather';

@Component({
  imports: [RouterOutlet, Map, CurrentWeather],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
