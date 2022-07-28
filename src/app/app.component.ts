import { Component } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';

import { ArticleStoreService } from './articles';
import { opacityFadeIn } from './common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ opacityFadeIn(500) ]
})
export class AppComponent {

  isArticleList: boolean;

  constructor(
    public articleStore: ArticleStoreService,
    router: Router
  ) {
    router.events.pipe(
      filter((event: Event) => event instanceof NavigationStart),
      map((event: Event) => event as NavigationStart),
      tap((event: NavigationStart) => (this.isArticleList = event.url === '/'))
    ).subscribe();
  }

}
