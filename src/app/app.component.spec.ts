import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AuthService } from './services/auth.service';
import { User, UserDTO } from './models/user.model';
import { API_ENDPOINT } from './app.constants';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NgbModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        HttpClient
      ]
    }).compileComponents();
  });

  it('Applitacion successfully created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
