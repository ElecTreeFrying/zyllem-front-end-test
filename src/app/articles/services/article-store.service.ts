import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { ArticleType } from '../../common';

@Injectable({
  providedIn: 'root'
})
export class ArticleStoreService {

  private filterTypeSource = new BehaviorSubject<ArticleType | null>(null);

  filterType$: Observable<ArticleType | null>;

  constructor() {
    this.filterType$ = this.filterTypeSource.asObservable();
  }

  setToAll(): void {
    this.filterTypeSource.next(null);
  }

  setToNormal(): void {
    this.filterTypeSource.next(ArticleType.NORMAL);
  }

  setToFeatured(): void {
    this.filterTypeSource.next(ArticleType.FEATURED);
  }

}
