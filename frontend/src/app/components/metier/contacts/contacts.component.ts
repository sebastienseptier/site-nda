import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

	myform: FormGroup;
	object: FormControl;
	message: FormControl;

	constructor() { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
	}
	
	createFormControls() {
		this.object = new FormControl('', [Validators.required]);
		this.message = new FormControl('', [Validators.required]);
	}
	
	createForm() {
		this.myform = new FormGroup({
			object: this.object,
			message: this.message
		});
	}
}