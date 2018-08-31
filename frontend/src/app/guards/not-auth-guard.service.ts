import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class NotAuthGuardService {

	constructor(private authService: AuthService, private router: Router) {}
	
	  // Function to determine whether user is authorized to view route
	  canActivate() {
		// Check if user is logged in
		if (this.authService.isLoggedIn()) {
			this.router.navigate(['/']); // Return error, route to home
			return false; // Return false: user not allowed to view route
		} else {
		  	return true; // Return true: user is allowed to view route
		}
	}
}