import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DisplayMessageComponent } from './display-message/display-message.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { UserListComponent } from './user/list/user-list.component';
import { AreYouSureComponent } from './modals/are-you-sure/are-you-sure.component';
import { ArticleModalComponent } from './modals/article-modal/article-modal.component';
import { EditArticleComponent } from './user/edit-article/edit-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    UserDetailsComponent,
    DisplayMessageComponent,
    UserComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    UserListComponent,
    AreYouSureComponent,
    ArticleModalComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot()
  ],
  providers: [
    HttpClient,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
