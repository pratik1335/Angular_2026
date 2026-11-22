import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  imports: [],
  selector: 'app-user-list-component',
  styleUrl: './user-list-component.css',
  templateUrl: './user-list-component.html',
})
export class UserListComponent implements OnInit{

  users: any[] = []

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.refreshUsers();
  }

  refreshUsers():void{
    this.userService.getUsers().subscribe(users=>this.users = users);
  }

}
