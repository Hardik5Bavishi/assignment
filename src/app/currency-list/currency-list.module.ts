import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListComponent } from './currency-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: CurrencyListComponent
  }
];

@NgModule({
  declarations: [CurrencyListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CurrencyListModule { }
