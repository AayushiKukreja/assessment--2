import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  access = false;
  haveAcess() {
    return this.access;
  }
  giveAccess() {
    this.access = true;
  }
  denyAccess() {
    this.access = false;
  }
  signUp(email: string, password: string) {
    return this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlxeD_GPUjBeD0OjUcI9RtJmEPqcbdAe8',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        tap((responseData) => {
          this.access = true;
        }),
        catchError((error) => {
          this.access = false;
          console.log('Error', error);
          return throwError('Login failed');
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlxeD_GPUjBeD0OjUcI9RtJmEPqcbdAe8',
        { email, password, returnSecureToken: true }
      )
      .pipe(
        tap((responseData) => {
          this.access = true;
        }),
        catchError((error) => {
          this.access = false;
          console.log('Error', error);
          return throwError('Login failed');
        })
      );
  }
}
