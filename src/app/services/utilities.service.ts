import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private toastr: ToastrService) { }

  getPictureKeyWord(article: Article): string {
    let keyWord = "";
    if (article && article.title) {
      keyWord = article.title.split(' ')[0];
    }
    return keyWord;
  }

  handleSuccess(message: string) {
    this.toastr.success(message, 'Success')
  }

  handleError(e: any, exactString?: string) {
    if (!exactString) {
      if (e.error.statusCode){
        this.toastr.error(e.error, 'Error')
      } else {
        this.toastr.error('Unknown error. Probably the server is inaccessible', 'Error')
      }
    } else {
      this.toastr.error(exactString, 'Error')
    }
  }
}
