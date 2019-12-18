import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageListComponent } from './language-list.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LanguageListComponent
  }
];

@NgModule({
  declarations: [LanguageListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class LanguageListModule { }
