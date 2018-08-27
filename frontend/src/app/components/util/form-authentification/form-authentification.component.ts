import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AuthGuardService } from '../../../guards/auth-guard.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-form-authentification',
	templateUrl: './form-authentification.component.html',
	styleUrls: ['./form-authentification.component.css']
})
export class FormAuthentificationComponent implements OnInit {

	myform: FormGroup;
	email: FormControl;
	password: FormControl;
	messageClass;
	message;
	processing = false;
	previousUrl;

	constructor(private authService: AuthService, private authGuard: AuthGuardService, private router: Router) { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
		// On page load, check if user was redirected to login
		if (this.authGuard.redirectUrl) {
			this.messageClass = 'alert alert-danger'; // Set error message: need to login
			this.message = 'You must be logged in to view that page.'; // Set message
			this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
			this.authGuard.redirectUrl = undefined; // Erase previous URL
	  	}
	}
	
	createFormControls() {
		this.email = new FormControl('', [
			Validators.required,
			Validators.pattern("[^ @]*@[^ @]*")
		]);
		this.password = new FormControl('', [
			Validators.required,
			Validators.minLength(8),
			Validators.pattern("((?=.*\\d)(?=.*\\W)(?=.*[a-z])(?=.*[A-Z]).{8,16})")
		]);
	}
	
	createForm() {
		this.myform = new FormGroup({
			email: this.email,
			password: this.password
		});
	}

	// Function to disable form
	disableForm() {
		this.myform.controls['email'].disable(); // Disable username field
		this.myform.controls['password'].disable(); // Disable password field
	}
	
	// Function to enable form
	enableForm() {
		this.myform.controls['email'].enable(); // Enable username field
		this.myform.controls['password'].enable(); // Enable password field
	}

	// Functiont to submit form and login user
	onLoginSubmit() {
		console.log('TEST');
		this.processing = true; // Used to submit button while is being processed
		this.disableForm(); // Disable form while being process
		// Create user object from user's input
		const user = {
			"email": this.myform.get('email').value,
			"password": this.myform.get('password').value
		};
		console.log('Sending: '+user.email+' & '+user.password);
		// Function to send login data to API
		this.authService.login(user).subscribe(data => {
			console.log(data);
		  // Check if response was a success or error
		  if (!data.success) {
			  	console.log('problem!');
				this.messageClass = 'alert alert-danger'; // Set bootstrap error class
				this.message = data.message; // Set error message
				this.processing = false; // Enable submit button
				this.enableForm(); // Enable form for editting
		  } else {console.log('OK!');
				this.messageClass = 'alert alert-success'; // Set bootstrap success class
				this.message = data.message; // Set success message
				// Function to store user's token in client local storage
				this.authService.storeUserData(data.token, data.user);
				// After 2 seconds, redirect to dashboard page
				setTimeout(() => {
					// Check if user was redirected or logging in for first time
					if (this.previousUrl) {
						this.router.navigate([this.previousUrl]); // Redirect to page they were trying to view before
					} else {
						this.router.navigate(['/']); // Navigate to dashboard view
					}
				}, 2000);
		  	}
		});
	}
}