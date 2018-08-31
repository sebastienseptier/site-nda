import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../models/user';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	data;
	user: User;
	requestedUrl: String;
	messageClass;
	message;
	
	constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
		this.user = { 
			id: '1', town: '', province: '', group: '', grade: '', email: '', password: '', gender: 'male', firstName: '',
			lastName: '', registrationDate: '', lastConnection: '',  profilPicture: '',
			description: '', changePassword: false, lockout: false, attempts: 0, birthDate: '', promotion: ''
		}
	}

	ngOnInit() {
		this.requestedUrl = this.activatedRoute.snapshot.params['id'];
		this.userService.getUserProfile(this.requestedUrl).subscribe(data => {
			// Check if user was found in database
			if (!data.success) {
				/*DEBBUGAGE*/
				/*this.messageClass = 'alert alert-danger';
				this.message = data.message; */
				this.router.navigate(['/pageIntrouvee']); // Navigate to error page
			} else {
				// Save the user for use in HTML
				this.user.id = data.user._id;
				this.user = data.user;
			}
		});
	}
}