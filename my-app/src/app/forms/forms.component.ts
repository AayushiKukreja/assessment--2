import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  constructor(private userService: UserService) {}
  onSubmit(form: NgForm) {
    const newUser: User = {
      name: form.value.name,
      age: form.value.age,
      email: form.value.email,
      status: form.value.status,
      id: Math.random(),
    };

    this.userService.createUser(newUser);
  }
}
