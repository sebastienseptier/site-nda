import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	userId = '';
	firstName = '';
	lastName = '';

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {
		if (this.authService.isLoggedIn()) {
			this.authService.dataString$.subscribe( data => {
				this.userId = data.id;
				this.firstName = data.firstName;
				this.lastName = data.lastName; 
			});
		}
	}

	logOut() {
		this.authService.logout();
		this.router.navigate['/'];
	}
}