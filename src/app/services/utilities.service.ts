import { Injectable } from '@angular/core';
import { Article } from '../models/article.dto';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  getPictureKeyWord(article: Article): string {
    let keyWord = "";
    if (article && article.title) {
      keyWord = article.title.split(' ')[0];
    }
    return keyWord;
  }
}
