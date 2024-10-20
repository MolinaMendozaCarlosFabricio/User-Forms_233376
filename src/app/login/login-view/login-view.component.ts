import { Component, Input } from '@angular/core';
import { UserEntity } from '../../users/interfaces/user-entity';
import { Router } from '@angular/router';
import { UsersListService } from '../../users/services/users-list.service';
import { SesionDataService } from '../services/sesion-data.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent {
  usernameOrEmail: string = "";
  passwordToCompare: string = "";

  banderaToFoundUser: boolean = false;
  showBanderaToFoundUser: boolean = false;
  banderaToComparePwd: boolean = false;
  showBanderaToComparePwd: boolean = false;

  constructor(private router: Router, private userListService: UsersListService, private sesionDataService: SesionDataService) { }

  login(): void {
    const listUsers: UserEntity[] = this.userListService.getUsers();
    console.log(listUsers)
    listUsers.forEach(users => {
      if(users.username === this.usernameOrEmail || this.usernameOrEmail === users.email){
        console.log(users.username, ", ", users.email)
        this.banderaToFoundUser = true;
        if(this.passwordToCompare === users.pwd){
          console.log(users.pwd)
          this.banderaToComparePwd = true;
          this.sesionDataService.login(users.id, users.rol);
          this.router.navigate(['/users']);
        }
      }
      else {this.banderaToComparePwd = true}
    });

    if(!this.banderaToFoundUser)
      this.showBanderaToFoundUser = true;

    if(!this.banderaToComparePwd)
      this.showBanderaToComparePwd = true;
  }
}
