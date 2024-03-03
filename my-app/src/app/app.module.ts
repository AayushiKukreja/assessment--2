import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserService } from './shared/user.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import { authGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HeaderComponent,
    ListUsersComponent,
    EditUserComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
