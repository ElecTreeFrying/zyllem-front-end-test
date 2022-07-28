import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FeaturedArticleComponent, NormalArticleComponent } from '.';

const MODULES = [
  CommonModule,
  RouterModule
];

const COMPONENTS = [
  FeaturedArticleComponent,
  NormalArticleComponent
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  entryComponents: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ArticleComponentModule { }
