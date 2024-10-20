import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserEntity } from '../interfaces/user-entity';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  @Input() objUser: UserEntity = {
    id: 0,
    username: "",
    email: "",
    pwd: "",
    rol: ""
  }
}
