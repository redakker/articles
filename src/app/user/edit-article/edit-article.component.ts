import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { CUT_BODY_AFTER } from 'src/app/app.constants';
import { AreYouSureComponent } from 'src/app/modals/are-you-sure/are-you-sure.component';
import { ArticleModalComponent } from 'src/app/modals/article-modal/article-modal.component';
import { Article } from 'src/app/models/article.model';
import { User } from 'src/app/models/user.model';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  articles: Article[] = [];
  me: User;

  constructor(
    private authService: AuthService,
    private articleService: ArticleService,
    private util: UtilitiesService,
    private modalService: NgbModal,
    ) { }

  ngOnInit(): void {
    // TODO, get the articles by user (create server endpoint)
    this.getArticles();

    this.authService.getMe().subscribe(
      {
        next: (data) => { this.me = data.user },
        error: (e) => this.util.handleError(e),
        complete: () => {} 
      }
    );
  }

  getDate(article: Article) {
    return moment.unix(article.updated / 1000).format("YYYY-MM-DD HH:mm:ss");
  }

  cutText(text: string) {
    return text.substring(0, CUT_BODY_AFTER)
  }

  getArticles() {
    this.articleService.getArticles().subscribe(
      {
        next: (data) => { this.articles = data.articles },
        // TODO: change the server object to produce unified error message object
        // See in the login component why
        error: (e) => this.util.handleError(e),
        complete: () => {} 
      }
    );
  }

  newArticle() {
    this.editArticle({} as Article);
  }

  editArticle(article: Article) {
    const modalRef = this.modalService.open(ArticleModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.article = article;

    modalRef.result.then((res) => {
      this.saveArticle(res);
    }, (res) => {
      // console.log('User does not want to delete the user. Cancelled');
    });
  }

  saveArticle(article: Article) {
    this.articleService.saveArticle(article).subscribe(
      {
        next: (data) => { 
          this.util.handleSuccess('The article has been successfully saved.');
          this.getArticles();
        },
        // TODO: change the server object to produce unified error message object
        // See in the login component why
        error: (e) => this.util.handleError(e),
        complete: () => {} 
      }
    );
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article.slug).subscribe(
      {
        next: (data) => { this.util.handleSuccess('The article has been successfully deleted.') },
        // TODO: change the server object to produce unified error message object
        // See in the login component why
        error: (e) => this.util.handleError(e),
        complete: () => {} 
      }
    );
  }

  areYouSure(article: Article){
    const modalRef = this.modalService.open(AreYouSureComponent);

    modalRef.result.then((res) => {
      this.deleteArticle(article);
      this.getArticles();
    }, (res) => {
      // console.log('User does not want to delete the user. Cancelled');
    });
  }

}
