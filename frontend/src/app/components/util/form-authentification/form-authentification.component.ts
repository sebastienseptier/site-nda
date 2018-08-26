import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-form-authentification',
	templateUrl: './form-authentification.component.html',
	styleUrls: ['./form-authentification.component.css']
})
export class FormAuthentificationComponent implements OnInit {

	myform: FormGroup;
	email: FormControl;
	password: FormControl;

	constructor() { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
	}
	
	createFormControls() {
		this.email = new FormControl('', [
			Validators.required,
			Validators.pattern("[^ @]*@[^ @]*")
		]);
		this.password = new FormControl('', [
			Validators.required,
			Validators.minLength(8),
			Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16})")
		]);
	}
	
	createForm() {
		this.myform = new FormGroup({
			email: this.email,
			password: this.password
		});
	}
}