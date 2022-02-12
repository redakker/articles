import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { routes } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { AuthService } from './auth.service';

describe("Router: Navigation test with and without login", () => {
  let location: Location;
  let router: Router;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        NgbModule,
        ToastrModule.forRoot()
      ],
      declarations: [AppComponent],
      providers: [HttpClient, ToastrService]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    authService = TestBed.get(AuthService);

    router.initialNavigation();
  });

  it("fakeAsync test", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('Navigate to non-existing URL redirects to /articles (no login)', fakeAsync(() => {
    router.navigate(["/nonexisting/url"]).then(() => {
      expect(location.path()).toBe("/articles");
    });
  }));

  it('Navigate to /user/signup takes to /user/signup (no login)', fakeAsync(() => {
    router.navigate(["/user/signup"]).then(() => {
      expect(location.path()).toBe("/user/signup");
    });
  }));

  it('Navigate to protected area /user/profile (no login)', fakeAsync(() => {
    router.navigate(["/user/profile"]).then(() => {
      expect(location.path()).toBe("/user/login");
    });
  }));

  it('Navigate to protected area /user/profile (with login)', fakeAsync(() => {
    spyOn<AuthService, any>(authService, 'isLoggedin').and.returnValue(true);
    router.navigate(["/user/profile"]).then(() => {
      expect(location.path()).toBe("/user/profile");
    });
  }));
});