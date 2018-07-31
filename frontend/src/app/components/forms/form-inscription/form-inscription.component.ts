import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user';
import { UserListService } from '../../../services/user-list.service';

@Component({
	selector: 'app-form-inscription',
	templateUrl: './form-inscription.component.html',
	styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {

	@Input() user: User;

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

	constructor() {
		//On définit un nouvel utilisateur s'il le component est utilisé depuis la page d'inscription.
		if (this.user == undefined) {
			this.user = { 
				id: 1, location: { id: 1, town: 'Lille', province: 'Nord', country: 'France'}, group: { id: 1, groupName: '', groupDescription: '', nbMembers: 0}, grade: { id: 1, gradeName: '', gradeDescription: ''}, email: '', password: '', name: '',
				surname: '', registrationDate: '', lastConnection: '', isConnected: false, profilPicture: '',
				description: '', changePassword: false, lockout: false, attempts: 0, birthDate: '', promotion: 2000
			}
		} 
	}

	ngOnInit() {}

}