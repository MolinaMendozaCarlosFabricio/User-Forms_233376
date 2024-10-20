import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserEntity } from '../interfaces/user-entity';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrl: './user-add-form.component.css'
})
export class UserAddFormComponent {
  @Output() addThisUser = new EventEmitter<UserEntity>();
  @Input() lenghtUsers: number = 0

  newUser: UserEntity = {
    id: 0,
    username: "",
    email: "",
    pwd: "",
    rol: ""
  }

  addUser(): void {
    this.newUser.id = this.lenghtUsers;
    this.addThisUser.emit(this.newUser);
    this.newUser = {
      id: 0,
      username: "",
      email: "",
      pwd: "",
      rol: ""
    };
  }
}
