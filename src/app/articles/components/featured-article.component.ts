import { Component } from '@angular/core';

import { FeaturedArticle, opacityFade } from '../../common';
import { ArticleUIComponent } from './article-component';

@Component({
  selector: 'featured-article',
  template: `
    <ng-container *ngIf="article.title">
      <div id="article" [title]="article.title" [@opacityFade] [routerLink]="'/'+article.id">

        <h1>{{ article.title }}</h1>
        <p>{{ article.author }}</p>
        <p>{{ article.publishedAt | date: 'medium' }}</p>

        <ng-container *ngIf="complete">
          <img [src]="article.featureImgUrl" [alt]="article.author" width="200">
          <br>
          <a [href]="article.url" target="_blank">{{ article.url }}</a>
        </ng-container>

      </div>
    </ng-container>
  `,
  styleUrls: ['./article.component.css'],
  animations: [ opacityFade(500) ]
})
export class FeaturedArticleComponent extends ArticleUIComponent<FeaturedArticle> {}
