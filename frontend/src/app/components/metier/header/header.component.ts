import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	firstName = '';
	lastName = '';

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.firstName = JSON.parse(localStorage.getItem("user")).firstName;
		this.lastName = JSON.parse(localStorage.getItem("user")).lastName;
	}
	
}