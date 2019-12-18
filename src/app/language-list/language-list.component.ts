import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'nativeName'];
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
      this.dataSource = res.languages;
    });
  }

}
