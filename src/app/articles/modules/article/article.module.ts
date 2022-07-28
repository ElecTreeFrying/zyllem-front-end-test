import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ArticleComponentModule } from '../../components/article-component.module';
import { ZyllemApiService } from 'src/app/zyllem-api.service';
import { ArticleComponent } from './article.component';

const MODULES = [
  CommonModule,
  MatProgressSpinnerModule,
  ArticleComponentModule
];

const PROVIDERS = [
  ZyllemApiService,
];

const DECLARATIONS = [
  ArticleComponent
];

@NgModule({
  imports: [
    ...MODULES,
    RouterModule.forChild([{
      path: '',
      component: ArticleComponent
    }])
  ],
  providers: [
    ...PROVIDERS
  ],
  declarations: [
    ...DECLARATIONS
  ]
})
export class ArticleModule { }
