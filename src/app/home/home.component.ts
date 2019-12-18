import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countryList: any = [];
  countryDetail: any;
  dataSource: any;
  constructor(private _commonService: CommonService
  ) { }

  ngOnInit() {
    this.getCountryDetail();
    this._commonService._subject.subscribe(res => {
      this.getCountryDetail();
    });
  }

  getCountryDetail(): void {
    this._commonService.getCountryDetail().subscribe(res => {
      this.countryDetail = res;
    });
  }

}
