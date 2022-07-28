import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ArticleItem, ArticleType } from '../../common';

import { ArticleStoreService } from '../services';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  constructor(
    private articleStore: ArticleStoreService
  ) { }

  transform(value: Observable<ArticleItem[]>): Observable<ArticleItem[]> {
    return this.articleStore.filterType$.pipe(
      switchMap((type: ArticleType) => {
        return value.pipe(
          map((articles: ArticleItem[]) => {
            return [...articles].filter(e => type ? e.type === type : true);
          })
        );
      })
    );
  }

}
