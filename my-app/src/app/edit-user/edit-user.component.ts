import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  user: User | null = null;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.userService.userBeingEdited.subscribe((user) => {
      console.log(user);
      if (user) {
        this.user = user;
        this.userForm = new FormGroup({
          name: new FormControl(this.user.name || ''),
          age: new FormControl(this.user.age || ''),
          email: new FormControl(this.user.email || ''),
          status: new FormControl(this.user.status || ''),
        });
      }
    });
  }

  onSubmit() {
    const updatedUserData = this.userForm?.value;
    console.log(updatedUserData);
    this.userService.updateUser(this.user!.id, updatedUserData);
  }
}
