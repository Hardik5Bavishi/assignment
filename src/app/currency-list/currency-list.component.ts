import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'code', 'symbol'];
  dataSource: any;

  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this.getLanguageList();
    this._commonService._subject.subscribe(res => {
      this.getLanguageList();
    });
  }

  getLanguageList(): void {
    this._commonService.getCountryDetail().subscribe(res => {
      this.dataSource = res.currencies;
    });
  }

}
