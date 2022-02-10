import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OK_200 } from 'src/app/app.constants';
import { ServerMessage } from 'src/app/models/server-message.model';
import { User } from 'src/app/models/user.model';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ConfirmedValidator } from '../user.component';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  message: ServerMessage;
  signedUp = false;

  constructor(
    private formBuilder: FormBuilder,
    private authServiceService: AuthServiceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
        username: [''],
        email: [''],
        password: ['', Validators.required],
        passVerify: ['', Validators.required]
    },
    { 
      validator: ConfirmedValidator('password', 'passVerify')
    }
    );
   }

  ngOnInit(): void {
  }

  fieldHasError(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.dirty
  }

  passwordMatch() {

    let errors =this.form.get('passVerify')?.errors
    if (errors && errors['confirmedValidator']) {
      return true;
    }

    return false;
  }

  signup () {

    const user = {
      username: this.form.get('username')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    } as User;

    this.authServiceService.signUp(user).subscribe(
      {
        next: (data) => { this.signedUp = true; this.message.statusCode = OK_200; this.message.message="Sign up was successful!" },
        // TODO: change the server object to produce unified error message object
        // Error message object sould be the same object structure bot in client and serve-side
        // then this format can be used
        // error: (e) => this.error = e.error,
        error: (e) => { 
          this.message  = {statusCode: e.status, message: e.error.errors.username}
        },
        complete: () => {} 
      }
    );
  }

}
