import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth-guard.service';
const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: FormsComponent, canActivate: [authGuard] },
  { path: 'list', component: ListUsersComponent, canActivate: [authGuard] },
  { path: 'edit', component: EditUserComponent, canActivate: [authGuard] },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
