import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ArticleComponentModule } from '../../components/article-component.module';
import { ZyllemApiService } from 'src/app/zyllem-api.service';
import { ArticleListComponent } from './article-list.component';
import { ArticlesDirective, ArticleFilterPipe } from '../../';

const MODULES = [
  CommonModule,
  MatProgressSpinnerModule,
  ArticleComponentModule
];

const PROVIDERS = [
  ZyllemApiService,
];

const DECLARATIONS = [
  ArticleListComponent,
  ArticlesDirective,
  ArticleFilterPipe
];

@NgModule({
  imports: [
    ...MODULES,
    RouterModule.forChild([{
      path: '',
      component: ArticleListComponent
    }])
  ],
  providers: [
    ...PROVIDERS
  ],
  declarations: [
    ...DECLARATIONS
  ]
})
export class ArticleListModule { }
