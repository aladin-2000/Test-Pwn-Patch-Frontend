import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShodanResponseModel } from '../Models/ShodanResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ShodanService {

  private baseUrl = 'https://localhost:7080/api/shodan';

  constructor(private http: HttpClient) { }

  getIpDetails(ip: string): Observable<ShodanResponseModel> {
    return this.http.get<ShodanResponseModel>(`${this.baseUrl}/${ip}`);
  }
}
