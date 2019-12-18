import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public _subject = new Subject<void>();
  url: string = environment.baseUrl;

  constructor(private _http: HttpClient) { }

  getCountryList(): Observable<any> {
    return this._http.get(`${this.url}/rest/v2/all`);
  }

  getCountryDetail(): Observable<any> {
    const alpha3code = this.getSelectedCountry()
    return this._http.get(`https://restcountries.eu/rest/v2/alpha/${alpha3code}`)
  }

  onChangeCountry() {
    this._subject.next();
  }

  setSelectedCountry(value: any) {
    localStorage.setItem('selectedCountry', value);
  }

  getSelectedCountry(): string {
    return localStorage.getItem('selectedCountry');
  }
}
