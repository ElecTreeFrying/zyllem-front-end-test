import { Component } from '@angular/core';

import { NormalArticle, opacityFade } from '../../common';
import { ArticleUIComponent } from './article-component';

@Component({
  selector: 'normal-article',
  template: `
    <ng-container *ngIf="article.title">
      <div id="article" [title]="article.title" [@opacityFade] [routerLink]="'/'+article.id">

        <h1>{{ article.title }}</h1>
        <p>{{ article.author }}</p>
        <p>{{ article.publishedAt | date: 'medium' }}</p>

        <ng-container *ngIf="complete">
          <p [innerHTML]="article.description"></p>
          <a [href]="article.url">{{ article.url }}</a>
        </ng-container>

      </div>
    </ng-container>
  `,
  styleUrls: ['./article.component.css'],
  animations: [ opacityFade(500) ]
})
export class NormalArticleComponent extends ArticleUIComponent<NormalArticle> {}
