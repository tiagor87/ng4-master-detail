import { Subscription } from 'rxjs/Subscription';
import { UserService } from './shared/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  editing;
  beginEditsubscription: Subscription;
  finishEditSubscription: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.beginEditsubscription = this.userService.beginEdit.subscribe(
      () => (this.editing = true)
    );
    this.finishEditSubscription = this.userService.finishEdit.subscribe(
      () => (this.editing = false)
    );
  }

  ngOnDestroy() {
    this.beginEditsubscription.unsubscribe();
    this.finishEditSubscription.unsubscribe();
  }
}
