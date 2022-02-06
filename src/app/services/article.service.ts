import { API_ENDPOINT, httpOptions } from '../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, ArticleData, Articles } from '../models/article.dto';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Articles> {
    return this.http.get<Articles>(API_ENDPOINT + '/articles', httpOptions);
  }

  getArticle(slug: String): Observable<ArticleData> {
    return this.http.get<ArticleData>(API_ENDPOINT + '/articles/' + slug, httpOptions);
  }
}
