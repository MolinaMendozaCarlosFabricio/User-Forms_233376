import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersViewComponent } from './users-view/users-view.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';



@NgModule({
  declarations: [
    UsersViewComponent,
    UserItemComponent,
    UserAddFormComponent,
    UserEditFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
