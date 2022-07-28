import { Component, OnInit } from '@angular/core';

import { ZyllemApiService } from 'src/app/zyllem-api.service';
import { ArticleStoreService } from '../../services';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  loaded: boolean;

  constructor(
    public zyllemApi: ZyllemApiService,
    private articleStore: ArticleStoreService
  ) { }

  ngOnInit() {
    this.loaded = false;

    this.articleStore.filterType$.subscribe(() => (this.loaded = false));
  }

}
