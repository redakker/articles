import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerMessage } from '../../models/server-message.dto';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = {} as ServerMessage;

  constructor(
    private formBuilder: FormBuilder,
    private authServiceService: AuthServiceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.navigateToProfile();
    }
  }

  fieldHasError(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.dirty
  }

  authenticate() {
    this.error = {} as ServerMessage;

    this.authServiceService.authenticate(this.form.get('email')?.value, this.form.get('password')?.value).subscribe(
      {
        next: (data) => { this.authServiceService.storeUser(data.user); this.navigateToProfile(); },
        error: (e) => this.error.message = "Invalid username or password!",
        complete: () => {} 
      }
    );
  }

  isLoggedIn() {
    return this.authServiceService.isLoggedin();
  }

  navigateToProfile() {
    this.router.navigate(['/user/profile']);
  }

}
