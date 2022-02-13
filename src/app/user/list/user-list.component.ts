import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CUT_BODY_AFTER_BIO } from 'src/app/app.constants';
import { AreYouSureComponent } from 'src/app/modals/are-you-sure/are-you-sure.component';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  me: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private util: UtilitiesService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.authService.getMe().subscribe(
      {
        next: (data) => { this.me = data.user },
        error: (e) => this.util.handleError(e),
        complete: () => {} 
      }
    );
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(
      {
        next: (data) => { 
          this.util.handleSuccess('User has been successfully deleted.'); 
          // Refresh the user list
          this.getUsers(); },
        // TODO: change the server object to produce unified error message object
        // See in the login component why
        error: (e) => this.util.handleError(e),
        complete: () => {} 
      }
    );
  }

  areYouSure(user: User){
    const modalRef = this.modalService.open(AreYouSureComponent);

    modalRef.result.then((res) => {
      this.deleteUser(user);
    }, (res) => {
      // console.log('User does not want to delete the user. Cancelled');
    });
  }

  editProfile() {
    this.router.navigate(['/user/profile']);
  }

  cutText(text: string) {
    return text.substring(0, CUT_BODY_AFTER_BIO)
  }

}
