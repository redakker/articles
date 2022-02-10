import { Component, OnInit } from '@angular/core';
import { Article, Articles, CommentDTO } from '../models/article.model';
import { ServerMessage } from '../models/server-message.model';
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
  message: ServerMessage;

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(
    {
      next: (data) => {
        this.articles = data.articles;
      },
      error: (e) => this.message = e.error,
      complete: () => {} 
    });
  }

  getPictureKeyWord(article: Article) {
    return this.util.getPictureKeyWord(article);
  }
}
