import { Injectable } from '@angular/core';
import { UserEntity } from '../interfaces/user-entity';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  listUsers: UserEntity[] = [
    {id: 0, username: "root", email: "email1@.example.com", pwd: "password", rol: "admin"},
    {id: 1, username: "user1", email: "email2@.example.com", pwd: "pwdnormal", rol: "common"}
  ]

  constructor() {}

  getUsers(): UserEntity[] {
    return this.listUsers;
  }
}
