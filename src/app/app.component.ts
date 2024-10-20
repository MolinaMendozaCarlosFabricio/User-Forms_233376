import { Component, OnInit } from '@angular/core';
import { UserEntity } from './users/interfaces/user-entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listUsers: UserEntity[] = [
    {id: 0, username: "root", email: "email1@.example.com", pwd: "password", rol: "admin"},
    {id: 1, username: "user1", email: "email2@.example.com", pwd: "pwdnormal", rol: "common"}
  ]
}
