import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./articles/modules').then(m => m.ArticleListModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./articles/modules').then(m => m.ArticleModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
