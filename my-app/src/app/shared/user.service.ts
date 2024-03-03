import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];
  userBeingEdited = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    this.http
      .post('https://test-3cf31-default-rtdb.firebaseio.com/users.json', user)
      .subscribe((responseData) => {
        console.log(responseData);
      });
    //this.users.push(user);
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get('https://test-3cf31-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((responseData: any) => {
          const users: User[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              users.push({ ...responseData[key], id: key });
            }
          }
          return users;
        })
      );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(
      `https://test-3cf31-default-rtdb.firebaseio.com/users/${id}.json`
    );
  }

  editUser(id: number) {
    this.http
      .get(`https://test-3cf31-default-rtdb.firebaseio.com/users/${id}.json`)
      .pipe(
        map((userData: any) => {
          const user: User = { ...userData, id };
          return user;
        }),
        tap((user: User) => {
          this.userBeingEdited.next(user);
        })
      )
      .subscribe();
  }

  updateUser(id: number, updatedUserData: User) {
    this.http
      .put(
        `https://test-3cf31-default-rtdb.firebaseio.com/users/${id}.json`,
        updatedUserData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
