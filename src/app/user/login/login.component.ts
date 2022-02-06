import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.dto';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authServiceService: AuthServiceService
  ) { }

  ngOnInit(): void {
  }

  authenticate() {
    //this.authServiceService.authenticate('redman@redman.hu', 'pass1').subscribe();
    this.authServiceService.delete({} as User);
  }

}
