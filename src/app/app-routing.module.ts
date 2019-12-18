import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'language',
    loadChildren: () => import('./language-list/language-list.module').then(m => m.LanguageListModule)
  },
  {
    path: 'currency',
    loadChildren: () => import('./currency-list/currency-list.module').then(m => m.CurrencyListModule)
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
