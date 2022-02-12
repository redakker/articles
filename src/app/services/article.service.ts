import { API_ENDPOINT } from '../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, ArticleContainer, Articles, CommentDTO } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Articles> {
    return this.http.get<Articles>(API_ENDPOINT + '/articles');
  }

  getArticle(slug: String): Observable<ArticleContainer> {
    return this.http.get<ArticleContainer>(API_ENDPOINT + '/articles/' + slug);
  }

  getComments(slug: string): Observable<CommentDTO>{
    return this.http.get<CommentDTO>(API_ENDPOINT + '/articles/' + slug + '/comments');
  }

  saveArticle(article: Article): Observable<any> {    
    if (article.slug) {
      // Update
      return this.http.put<any>(API_ENDPOINT + '/articles/' + article.slug, article);
    } else {
      // Insert
      return this.http.post<any>(API_ENDPOINT + '/articles', article);
    }
  }

  deleteArticle(slug: String): Observable<ArticleContainer> {
    return this.http.delete<ArticleContainer>(API_ENDPOINT + '/articles/' + slug);
  }
}
