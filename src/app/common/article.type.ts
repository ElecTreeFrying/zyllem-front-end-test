import { FeaturedArticle, NormalArticle } from '.';
import { FeaturedArticleComponent, NormalArticleComponent } from '../articles';

export type ArticleItem = Partial<NormalArticle & FeaturedArticle>;
export type ArticleComponent = NormalArticleComponent | FeaturedArticleComponent;
