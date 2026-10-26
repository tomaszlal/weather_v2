import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coordinates, Localization } from '../../types/common';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    public getLocalizationName(coordinates: Coordinates): Observable<Localization> {
        return this.http.get<Localization>(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.lat}&lon=${coordinates.lon}`);
    }

}
