import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionDataService {
  isLogged: boolean = false;
  idUserLogged: number = 0;
  rolUserLogged: string = "";

  constructor() { }

  login(idUser: number, rolUser: string){
    this.isLogged = true;
    this.idUserLogged = idUser;
    this.rolUserLogged = rolUser;
  }

  getRolUserLogged(): string{
    return this.rolUserLogged;
  }

  logout () {
    this.isLogged = false;
    this.idUserLogged = 0;
    this.rolUserLogged = "";
  }
}
