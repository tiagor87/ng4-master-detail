import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';
import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  Output
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  private listSubscription: Subscription;
  private userSubscription: Subscription;
  users: User[];
  constructor(private service: UserService) {}

  ngOnInit() {
    this.users = this.service.getAll();
    this.listSubscription = this.service.usersListChanged.subscribe(
      users => (this.users = users)
    );
    this.userSubscription = this.service.singleUserListChanged.subscribe(
      data => {
        this.users.splice(data.index, 1, data.user);
      }
    );
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
