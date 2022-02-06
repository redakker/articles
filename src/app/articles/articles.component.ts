import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, Articles } from '../models/article.dto';
import { ArticleService } from '../services/article.service';
import { UtilitiesService } from '../services/utilities.service';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(
    private articleService: ArticleService,
    private util: UtilitiesService
  ) { }

  articles: Article[] = [];
  slug: string = '';
  error = false;

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(
    {
      next: (data) => this.articles = data.articles,
      error: (e) => this.error = true,
      complete: () => {} 
    });
  }

  getPictureKeyWord(article: Article) {
    return this.util.getPictureKeyWord(article);
  }
}