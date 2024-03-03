import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLoginMode = true;
  error: string = '';
  successMessage: string = '';
  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  constructor(private authService: AuthService) {
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
  onLogin() {
    this.authService.giveAccess();
  }
  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      this.error = 'Inavlid Form!Please Check the details!';
    }
    if (this.isLoginMode) {
      this.authService
        .login(authForm.value.email, authForm.value.password)
        .subscribe({
          next: (responseData) => {
            this.successMessage = 'Login successful!';
            console.log(responseData);
          },
          error: (error) => {
            this.error = 'An Error Occured';
            console.log(error);
          },
        });
    } else {
      this.authService
        .signUp(authForm.value.email, authForm.value.password)
        .subscribe({
          next: (responseData) => {
            console.log(responseData);
          },
          error: (error) => {
            this.error = 'An Error Occured';
            console.log(error);
          },
        });
    }

    console.log(authForm.value);
  }

  @HostListener('document:click', ['$event'])
  hideErrorOnClick(event: MouseEvent) {
    // Check if the click event is not inside the error message container
    if (!(event.target as HTMLElement).closest('.error-container')) {
      this.error = '';
    }
  }
}
