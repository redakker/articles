import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';
import { API_ENDPOINT } from '../app.constants';
import { User, UserDTO } from '../models/user.model';

import { AuthService } from './auth.service';

describe('AuthServiceService', () => {
  let service: AuthService;

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
        HttpClient,
        AuthService
      ]
    }).compileComponents();
  });

  it(
    'get Me as a user',
    inject(
      [HttpTestingController, AuthService],
      (httpMock: HttpTestingController, authService: AuthService) => {

        const me = {
          user : {
            id: 1,
            username: 'redman',
            email: 'redman@redman.hu',
            bio: 'developer',
            image: 'http://pictureprovider.com/redman.jpg',
            token: 'fakeTokenxyz1234',
            password: ''
          } as User

        } as UserDTO;
        

        authService.getMe().subscribe((data) => {
            expect(data).toEqual(me);
        });

        const mockReq = httpMock.expectOne(API_ENDPOINT + '/user');

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(me);

        httpMock.verify();
      }
    )
  );
});
