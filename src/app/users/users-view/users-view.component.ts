import { Component, Input, OnInit } from '@angular/core';
import { UserEntity } from '../interfaces/user-entity';
import { UsersListService } from '../services/users-list.service';
import { SesionDataService } from '../../login/services/sesion-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrl: './users-view.component.css'
})
export class UsersViewComponent implements OnInit {
  @Input() listUsers: UserEntity[] = [];
  isAdmin: boolean = false;

  constructor(private router: Router, private usersListService: UsersListService, private sesionDataService: SesionDataService){}

  ngOnInit(): void {
    this.listUsers = this.usersListService.getUsers();
    if(this.sesionDataService.getRolUserLogged() === "admin")
      this.isAdmin = true;
  }

  receibeNewUser(newUser: UserEntity): void {
    this.listUsers.push(newUser);
  }

  deleteThisUser(idUserToDelete: number): void{
    this.listUsers.splice(idUserToDelete, 1);
    console.log("User eliminado")
    console.log(this.listUsers)
  }

  logout(){
    this.sesionDataService.logout();
    this.router.navigate(['/'])
  }
}
