import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { UserService } from './shared/user.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule],
  declarations: [UserListComponent, UserComponent, UsersComponent, HomeComponent],
  providers: [UserService]
})
export class UsersModule {}
