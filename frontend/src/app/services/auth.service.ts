import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

	domain = "http://localhost:8080/"; //Development
	authToken;
	user;
	options;

	// Observable for navbar data refresh
	private dataUserSource = new Subject<any>();
	dataString$ = this.dataUserSource.asObservable();

	constructor(private http: Http) {}

	// Function to create headers, add token, to be used in HTTP requests
	createAuthentificationHeaders() {
		this.loadToken(); // Get token so it can be attached to headers
		// Headers configuration options
		this.options = new RequestOptions({
			headers: new Headers({
				'Content-Type': 'application/json', // Format set to JSON
				'authorization': this.authToken // Attach token
			})
		});
	}

	// Observable data updater
	insertData(data: any) {
		this.dataUserSource.next(data)
	}

	// Function to get token from client local storage
	loadToken() {
		this.authToken = localStorage.getItem('token');; // Get token and asssign to variable to be used elsewhere
	}

	// Function to register user accounts
	registerUser(user) {
		return this.http.post(this.domain + 'authentification/register', user).map(res => res.json());
	}

	// Function to check if e-mail is taken
	checkEmail(email) {
		return this.http.get(this.domain + 'authentification/checkEmail' + email).map(res => res.json());
	}

	// Function to login user
	login(user) {
		this.insertData(user);
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
		this.insertData(user);
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