import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getBusServiceDetails() {
        return this.http.get('../../../assets/bus-services-data.json');
    }
}