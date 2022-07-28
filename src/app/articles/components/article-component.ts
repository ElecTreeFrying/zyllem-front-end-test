import { Directive, Input } from "@angular/core";

@Directive({})
export class ArticleUIComponent<T> {

  @Input()
  article: Partial<T>;

  @Input()
  complete: boolean;

}
