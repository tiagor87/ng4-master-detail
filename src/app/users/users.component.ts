import { Subscription } from 'rxjs/Subscription';
import { UserService } from './shared/user.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy, OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
