import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Input, OnInit, Output, Type, ViewContainerRef } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { exhaustMap, mergeMap, tap } from 'rxjs/operators';

import { NormalArticleComponent, FeaturedArticleComponent } from '../components';
import { ArticleComponent, ArticleItem, ArticleType } from '../../common';

@Directive({
  selector: '[articles]'
})
export class ArticlesDirective implements OnInit {

  @Output()
  loaded = new EventEmitter();

  @Input()
  articles$: Observable<ArticleItem[]>;

  constructor(
    private element: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.articles$.pipe(
      tap(() => this.viewContainerRef.clear()),
      tap(() => this.loaded.emit()),
      exhaustMap((articles: ArticleItem[]) => articles),
      mergeMap((article: ArticleItem) => {
        switch (article.type) {
          case ArticleType.NORMAL:   return this.addToView(NormalArticleComponent, article);
          case ArticleType.FEATURED: return this.addToView(FeaturedArticleComponent, article);
        }
      }),
    ).subscribe();
  }

  addToView(component: Type<unknown>, article: ArticleItem): Observable<never> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as ArticleComponent).article = article;
    try {
      const host = this.element.nativeElement;
      host.insertBefore(
        componentRef.location.nativeElement,
        host.firstChild
      );
    } catch (error) { }
    return EMPTY;
  }

}
