import { API_ENDPOINT, httpOptions } from '../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleContainer, Articles, CommentDTO } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Articles> {
    return this.http.get<Articles>(API_ENDPOINT + '/articles', httpOptions);
  }

  getArticle(slug: String): Observable<ArticleContainer> {
    return this.http.get<ArticleContainer>(API_ENDPOINT + '/articles/' + slug, httpOptions);
  }

  getComments(slug: string): Observable<CommentDTO>{
    return this.http.get<CommentDTO>(API_ENDPOINT + '/articles/' + slug + '/comments', httpOptions);
  }
}
