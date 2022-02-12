import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditArticleComponent } from './user/edit-article/edit-article.component';
import { UserListComponent } from './user/list/user-list.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:slug', component: ArticleComponent },
  { path: 'user', component: UserComponent, 
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
      { path: 'list', component: UserListComponent, canActivate: [AuthGuardService]  },
      { path: 'articlelist', component: EditArticleComponent, canActivate: [AuthGuardService]  },
      { path: 'signup', component: SignUpComponent },
    ]
  },
  { path: '**', redirectTo: 'articles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
