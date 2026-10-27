import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coordinates, PlaceOfLocation } from '../../types/common';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    public getLocationName(coordinates: Coordinates): Promise<PlaceOfLocation> {
        const location: Observable<PlaceOfLocation> = this.http.get<PlaceOfLocation>(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.lat}&lon=${coordinates.lon}`);
        return firstValueFrom(location);
    }

}
