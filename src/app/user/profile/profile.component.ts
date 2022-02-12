import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OK_200 } from 'src/app/app.constants';
import { ServerMessage } from 'src/app/models/server-message.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { ConfirmedValidator } from '../user.component';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private util: UtilitiesService
  ) {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        bio: [''],
        image: ['', Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")],
    }
    );
   }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      {
        next: (data) => { 
          this.form.patchValue(data.user);
        },
        // TODO: change the server object to produce unified error message object
        // Error message object sould be the same object structure bot in client and serve-side
        // then this format can be used
        // error: (e) => this.error = e.error,
        error: (e) => this.util.handleError(e, e.error?.errors?.username),
        complete: () => {} 
      }
    );
  }

  fieldHasError(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.dirty
  }

  emptyImage(): boolean {
    return this.form.get('image')?.value == '';
  }

  save () {
      // Won't save the username and e-mail to prevent hacking
      // Otherwise user could modify it with debug tool and send an update
      
      let user = {
        bio: this.form.get('bio')?.value,
        image: this.form.get('image')?.value
      } as User;

      // !!!!!!!!!!!!!!!!!!!!
      // TODO: change server side, it does not verify if existing user/e-mail address is sent in the profile modification object
      // It does not prevent the modification, no error message

    this.userService.updateUser(user).subscribe(
      {
        next: (data) => { 
            this.util.handleSuccess('The profile has been successfully saved!')
            this.form.markAsPristine();
        },
        // TODO: change the server object to produce unified error message object
        // See in the login component why
        error: (e) => this.util.handleError(e),
        complete: () => {} 
      }
    );
  }

}
