import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
import { AuthGuardService } from '../../../guards/auth-guard.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-form-inscription',
	templateUrl: './form-inscription.component.html',
	styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {

	@Input() user: User;
	validateTherms: boolean = false;
	message;
	messageClass;
	processing = false;
	emailValid;
	emailMessage;
	usernameValid;
	usernameMessage;
	  
	//Données temporaires permettant de tester le formulaire.
	promotions = [
		{id: 1, name: 2000},
		{id: 2, name: 2001},
		{id: 3, name: 2002},
		{id: 4, name: 2003},
		{id: 5, name: 2004},
		{id: 6, name: 2005},
		{id: 7, name: 2006},
		{id: 8, name: 2007},
		{id: 9, name: 2008},
		{id: 10, name: 2009},
		{id: 11, name: 2010},
		{id: 12, name: 2011},
		{id: 13, name: 2012},
		{id: 14, name: 2013},
		{id: 15, name: 2014},
		{id: 16, name: 2015},
		{id: 17, name: 2016},
		{id: 18, name: 2017},
		{id: 19, name: 2018},
		{id: 20, name: 2019}
	];

	towns = [
		{ id: 1, name: 'Lille'},
		{ id: 2, name: 'Paris'},
		{ id: 3, name: 'Valenciennes'},
		{ id: 4, name: 'Douais'},
		{ id: 5, name: 'St-Omer'},
		{ id: 6, name: 'Lomme'},
		{ id: 7, name: 'Arras'},
		{ id: 8, name: 'St-Amand-les-Eaux'}
	];

	provinces = [
		{ id: 1, name: 'Nord'},
		{ id: 2, name: 'Ile de France'},
		{ id: 3, name: 'Pas de Calais'}
	];

	myform: FormGroup;
	gender: FormControl;
	firstName: FormControl;
	lastName: FormControl;
	province: FormControl;
	town: FormControl;
	birthDate: FormControl;
	promotion: FormControl;
	email: FormControl;
	password: FormControl;
	confirm: FormControl;
	checkTherms: FormControl;

	constructor(private formBuilder: FormBuilder, private authService: AuthService, private authGuard: AuthGuardService, private router: Router) {
		//On définit un nouvel utilisateur s'il le component est utilisé depuis la page d'inscription.
		if (this.user == undefined) {
			this.user = { 
				id: 1, location: { id: 1, town: '', province: '', country: ''}, group: { id: 1, groupName: '', groupDescription: '', nbMembers: 0}, grade: { id: 1, gradeName: '', gradeDescription: ''}, email: '', password: '', gender: 'male', firstName: '',
				lastName: '', registrationDate: '', lastConnection: '', isConnected: false, profilPicture: '',
				description: '', changePassword: false, lockout: false, attempts: 0, birthDate: '', promotion: ''
			}
		}
		else {
			this.validateTherms = true;
		}
		this.createForm();
	}

	ngOnInit() {
		
	}
	
	createForm() {
		this.myform = this.formBuilder.group({
			gender: [this.user.gender, Validators.required],
			firstName: [this.user.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
			lastName: [this.user.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
			province: [this.user.location.province, Validators.required],
			town: [this.user.location.town, Validators.required],
			birthDate: [this.user.birthDate, Validators.required],
			promotion: [this.user.promotion, Validators.required],
			email: [this.user.email, [
				Validators.required,
				Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
				Validators.minLength(5),
				Validators.maxLength(30)
			]],
			password: [this.user.password, [
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(16),
				Validators.pattern(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,16}$/)
			]],
			confirm: [this.user.password, [Validators.required]],
			checkTherms: [this.validateTherms, Validators.required]
		}, { validator: this.matchingPasswords('password', 'confirm') });
	}

	// Funciton to ensure passwords match
	matchingPasswords(password, confirm) {
		return (group: FormGroup) => {
			// Check if both fields are the same
			if (group.controls[password].value === group.controls[confirm].value) {
				return null; // Return as a match
			} else {
				return { 'matchingPasswords': true } // Return as error: do not match
			}
		}
	}

	// Function to disable the registration form
	disableForm() {
		this.myform.controls['email'].disable();
		this.myform.controls['firstName'].disable();
		this.myform.controls['lastName'].disable();
		this.myform.controls['password'].disable();
		this.myform.controls['confirm'].disable();
		this.myform.controls['promotion'].disable();
		this.myform.controls['province'].disable();
		this.myform.controls['town'].disable();
		this.myform.controls['birthDate'].disable();
		this.myform.controls['gender'].disable();
	}
	
	// Function to enable the registration form
	enableForm() {
		this.myform.controls['email'].enable();
		this.myform.controls['firstName'].enable();
		this.myform.controls['lastName'].enable();
		this.myform.controls['password'].enable();
		this.myform.controls['confirm'].enable();
		this.myform.controls['promotion'].enable();
		this.myform.controls['province'].enable();
		this.myform.controls['town'].enable();
		this.myform.controls['birthDate'].enable();
		this.myform.controls['gender'].enable();
	}
	
	// Function to submit form
	onRegisterSubmit() {
		this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
		this.disableForm(); // Disable the form
		// Create user object form user's inputs
		const user = {
			email: this.myform.get('email').value,
			firstName: this.capitalizeFirstLetter(this.myform.get('firstName').value),
			lastName: this.myform.get('lastName').value.toUpperCase(),
			password: this.myform.get('password').value,
			promotion: this.myform.get('promotion').value,
			province: this.myform.get('province').value,
			town: this.myform.get('town').value,
			birthDate: this.myform.get('birthDate').value,
			gender: this.myform.get('gender').value
		}
	
		// Function from authentication service to register user
		this.authService.registerUser(user).subscribe(data => {
			// Resposne from registration attempt
			if (!data.success) {
				this.messageClass = 'alert alert-danger'; // Set an error class
				this.message = data.message; // Set an error message
				this.processing = false; // Re-enable submit button
				this.enableForm(); // Re-enable form
			} else {
				this.messageClass = 'alert alert-success'; // Set a success class
				this.message = data.message; // Set a success message and scroll to it
				window.scrollTo(0, 0);
				// After 2 second timeout, navigate to the login page
				setTimeout(() => {
					this.router.navigate(['/authentification']); // Redirect to login view
				}, 2000);
			}
		});
	}

	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	  
	// Function to check if e-mail is taken
  	checkEmail() {
		// Function from authentication file to check if e-mail is taken
		this.authService.checkEmail(this.myform.get('email').value).subscribe(data => {
			// Check if success true or false was returned from API
			if (!data.success) {
				this.emailValid = false; // Return email as invalid
				this.emailMessage = data.message; // Return error message
			} else {
				this.emailValid = true; // Return email as valid
				this.emailMessage = data.message; // Return success message
			}
		});
  	}

  	// Function to check if username is available
  	checkUsername() {
		// Function from authentication file to check if username is taken
		this.authService.checkUsername(this.myform.get('username').value).subscribe(data => {
			// Check if success true or success false was returned from API
			if (!data.success) {
				this.usernameValid = false; // Return username as invalid
				this.usernameMessage = data.message; // Return error message
			} else {
				this.usernameValid = true; // Return username as valid
				this.usernameMessage = data.message; // Return success message
			}
		});
	}
}