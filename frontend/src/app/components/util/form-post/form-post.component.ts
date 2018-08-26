import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-form-post',
	templateUrl: './form-post.component.html',
	styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

	myform: FormGroup;
	title: FormControl;
	tag: FormControl;
	content: FormControl;
	file: FormControl;

	constructor() { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
	}
	
	createFormControls() {
		this.title = new FormControl('', [Validators.required]);
		this.tag = new FormControl('', [Validators.required]);
		this.content = new FormControl('', [Validators.required]);
		this.file = new FormControl('');
	}
	
	createForm() {
		this.myform = new FormGroup({
			title: this.title,
			tag: this.tag,
			content: this.content,
			file: this.file
		});
	}
}