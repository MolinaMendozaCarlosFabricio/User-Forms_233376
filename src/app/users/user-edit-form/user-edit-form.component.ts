import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserEntity } from '../interfaces/user-entity';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrl: './user-edit-form.component.css'
})
export class UserEditFormComponent {
  @Input() userToEdit: UserEntity = {
    id: 0,
    username: "",
    email: "",
    pwd: "",
    rol: ""
  }

  @Output() sendThisUserToDelete = new EventEmitter<number>();

  sendingIdUser (): void {
    this.sendThisUserToDelete.emit(this.userToEdit.id);
  }
}
