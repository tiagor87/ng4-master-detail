import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  private user: User;
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit() {
    this.userForm = this.buildForm();
    this.route.params.subscribe(params => {
      this.service.beginEdit.next();
      this.user = this.service.getById(+params['id']);
      if (!!this.user) {
        this.userForm.setValue(this.user);
      }
    });
  }

  ngOnDestroy() {}

  cancel() {
    this.service.finishEdit.next();
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }

  submit() {
    !!this.user
      ? this.service.update(this.user.id, this.userForm.value)
      : this.service.insert(this.userForm.value);
    this.cancel();
  }

  private buildForm() {
    return this.formBuilder.group({
      id: this.formBuilder.control(''),
      name: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', [
        Validators.email,
        Validators.required
      ]),
      urlProfileImage: this.formBuilder.control('')
    });
  }
}
