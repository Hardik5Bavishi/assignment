import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Assignment';
  countryList: any = [];
  selectedCountry: string;

  constructor(private _commonService: CommonService) {

  }

  ngOnInit() {
    this.getCountryList();
  }


  getCountryList(): void {
    this._commonService.getCountryList().subscribe(res => {
      this.countryList = res;
      this.selectedCountry = res[0].alpha3Code;
      this._commonService.setSelectedCountry(res[0].alpha3Code);
    });
  }

  onChange(event: any): void {
    this._commonService.setSelectedCountry(event.value);
    this._commonService.onChangeCountry();
  }
}
