import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
	selector: 'app-list-user',
	templateUrl: './list-user.component.html',
	styleUrls: ['./list-user.component.css'] 
})
export class ListUserComponent implements OnInit {

	users: User[];

	constructor(private userService: UserService) { }

	ngOnInit() {
		this.users = this.userService.getUserList();
	}
}