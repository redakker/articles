import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Articles';
  isCollapsed = true;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  isLoggedin() {
    return this.authService.isLoggedin();
  }

  logout() {
    this.authService.logout();
  }
}
