import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

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
    private authService: AuthServiceService
  ) {}

  isLoggedin() {
    return this.authService.isLoggedin();
  }

  logout() {
    this.authService.logout();
  }
}
