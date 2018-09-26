import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { User } from '../../../models/user';

@Component({
	selector: 'app-form-inscription',
	templateUrl: './form-inscription.component.html',
	styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {

	@Input() user: User;
	validateTherms: boolean = false;
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
	birthName : FormControl;
	province: FormControl;
	town: FormControl;
	birthDate: FormControl;
	promotion: FormControl;
	email: FormControl;
	password: FormControl;
	checkTherms: FormControl;

	ngOnInit() {
		//On définit un nouvel utilisateur s'il le component est utilisé depuis la page d'inscription.
		if (this.user == undefined) {
			this.user = { 
				id: 1, location: { id: 1, town: '', province: '', country: ''}, 
				group: { id: 1, groupName: '', groupDescription: '', nbMembers: 0}, 
				grade: { id: 1, gradeName: '', gradeDescription: ''}, 
				email: '', password: '', gender: '', 
				name: {firstName: '',lastName: '',birthName: ''}, 
				registrationDate: '', lastConnection: '', isConnected: false, 
				profilPicture: '', description: '', changePassword: false, 
				lockout: false, attempts: 0, birthDate: '', promotion: ''
			}
		}
		else {
			this.validateTherms = true;
		}
		this.createFormControls();
		this.createForm();
	}
	
	createFormControls() {
		this.gender = new FormControl(this.user.gender, Validators.required);
		this.firstName = new FormControl(this.user.name.firstName, Validators.required);
		this.lastName = new FormControl(this.user.name.lastName, Validators.required);
		this.birthName = new FormControl(this.user.name.birthName, Validators.required);
		this.province = new FormControl(this.user.location.province, Validators.required);
		this.town = new FormControl(this.user.location.town, Validators.required);
		this.birthDate = new FormControl(this.user.birthDate, Validators.required);
		this.promotion = new FormControl(this.user.promotion, Validators.required);
		this.email = new FormControl(this.user.email, [
			Validators.required,
			Validators.pattern("[^ @]*@[^ @]*")
		]);
		this.password = new FormControl(this.user.password, [
			Validators.required,
			Validators.minLength(8),
			Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,26})")
		]);
		this.checkTherms = new FormControl(this.validateTherms, Validators.required);
	}
	
	createForm() {
		this.myform = new FormGroup({
			gender: this.gender,
			name: new FormGroup({
				firstName: this.firstName,
				lastName: this.lastName,
				birthName: this.birthName
			}),
			province: this.province,
			town: this.town,
			birthDate: this.birthDate,
			promotion: this.promotion,
			email: this.email,
			password: this.password,
			checkTherms: this.checkTherms
		});
	}
	onFormSubmit(form:NgForm){
		//console.trace();
		console.log(form); 
		
	}
}