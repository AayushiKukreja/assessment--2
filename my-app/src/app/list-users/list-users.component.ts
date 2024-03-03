import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // this.userService.getUsers().subscribe((users) => {
    //   this.users = users;
    //   console.log(this.users);
    // });
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }
  deleteUser(id: number) {
    console.log(id);
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();
    });
  }
  editUser(id: number) {
    console.log(id);
    this.userService.editUser(id);
    this.router.navigate(['/edit']);
  }
}
