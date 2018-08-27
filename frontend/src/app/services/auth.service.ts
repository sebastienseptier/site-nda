import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	domain = "http://localhost:8080/"; //Development
	authToken;
	user;
	options;

	constructor(private http: Http) {}

	// Function to create headers, add token, to be used in HTTP requests
	createAuthenticationHeaders() {
		this.loadToken(); // Get token so it can be attached to headers
		// Headers configuration options
		this.options = new RequestOptions({
			headers: new Headers({
				'Content-Type': 'application/json', // Format set to JSON
				'authorization': this.authToken // Attach token
			})
		});
	}

	// Function to get token from client local storage
	loadToken() {
		this.authToken = localStorage.getItem('token');; // Get token and asssign to variable to be used elsewhere
	}

	// Function to register user accounts
	registerUser(user) {
		return this.http.post(this.domain + 'authentification/register', user).map(res => res.json());
	}

	// Function to check if username is taken
	checkUsername(username) {
		return this.http.get(this.domain + 'authentification/checkUsername' + username).map(res => res.json());
	}

	// Function to check if e-mail is taken
	checkEmail(email) {
		return this.http.get(this.domain + 'authentification/checkEmail' + email).map(res => res.json());
	}

	// Function to login user
	login(user) {
		return this.http.post(this.domain + 'authentification/login', user).map(res => res.json());
	}

	// Function to logout
	logout() {
		this.authToken = null; // Set token to null
		this.user = null; // Set user to null
		localStorage.clear(); // Clear local storage
	}

	// Function to store user's data in client local storage
	storeUserData(token, user) {
		localStorage.setItem('token', token); // Set token in local storage
		localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
		this.authToken = token; // Assign token to be used elsewhere
		this.user = user; // Set user to be used elsewhere
	}

	// Function to get user's profile data
	getProfile() {
		this.createAuthenticationHeaders(); // Create headers before sending to API
		return this.http.get(this.domain + 'authentification/profile', this.options).map(res => res.json());
	}

	// Function to get public profile data
	getPublicProfile(username) {
		this.createAuthenticationHeaders(); // Create headers before sending to API
		return this.http.get(this.domain + 'authentification/publicProfile/' + username, this.options).map(res => res.json());
	}

	// Function to check if user is logged in
	isLoggedIn() {
		if (localStorage.getItem("token") == null) {
			return false;
		}
		else {
			return true;
		}
	}
}