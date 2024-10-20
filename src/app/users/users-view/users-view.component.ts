import { Component, Input, OnInit } from '@angular/core';
import { UserEntity } from '../interfaces/user-entity';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrl: './users-view.component.css'
})
export class UsersViewComponent implements OnInit {
  @Input() listUsers: UserEntity[] = [];
  isAdmin: boolean = false;

  ngOnInit(): void {
  }

  receibeNewUser(newUser: UserEntity): void {
    this.listUsers.push(newUser);
  }

  deleteThisUser(idUserToDelete: number): void{
    this.listUsers.splice(idUserToDelete, 1);
    console.log("User eliminado")
    console.log(this.listUsers)
  }
}
