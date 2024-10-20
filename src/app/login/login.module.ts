import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './login-view/login-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LoginViewComponent,
  ]
})
export class LoginModule { }
