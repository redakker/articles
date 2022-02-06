import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, Articles } from '../models/article.dto';
import { ArticleService } from '../services/article.service';
import { UtilitiesService } from '../services/utilities.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private util: UtilitiesService, private articleService: ArticleService, private route: ActivatedRoute) { }

  article: Article = {} as Article;
  error = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['slug']) {
        this.articleService.getArticle(params['slug']).subscribe( {
          next: (data) => this.article = data.article,
          error: (e) => this.error = true,
          complete: () => {} 
        });
      }
    });
  }

  getPictureKeyWord(article: Article) {
    return this.util.getPictureKeyWord(article);
  }

}