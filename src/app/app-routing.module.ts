import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login/login-view/login-view.component';
import { UsersViewComponent } from './users/users-view/users-view.component';

const routes: Routes = [
  {path: "", component: LoginViewComponent},
  {path: "users", component: UsersViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
