import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ZyllemApiService } from 'src/app/zyllem-api.service';
import { Article } from 'src/app/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article

  constructor(
    private route: ActivatedRoute,
    public zyllemApi: ZyllemApiService,
  ) { }

  ngOnInit() {
    this.zyllemApi.getArticleById$(this.route.snapshot.params.id).subscribe(
      (article: Article) => (this.article = article)
    );
  }

}
