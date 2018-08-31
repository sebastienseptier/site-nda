import { Injectable, group } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UserService {

	options;
	domain = this.authService.domain;
	//Données temporaires, permet de tester l'utilisation des données.
	users = [/*
		{ 	id: 1,
			location: { id: 1, town: 'Lille', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
			grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
			email: 'romain.dupont@gmail.com',
			password: 'toto',
			gender: 'male',
			firstName: 'Romain',
			lastName: 'Dupont',
			registrationDate: '2018-07-01',
			lastConnection: '2018-07-01',
			isConnected: true,
			profilPicture: '/assets/user.svg',
			description: 'Description de Romain Dupont. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1992-01-05',
			promotion: '2004'
		},
		{ 	id: 2,
			location: { id: 1, town: 'Valenciennes', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2014', groupDescription: 'Les anciens de 2014!', nbMembers: 12},
			grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
			email: 'victor.durand@gmail.com',
			password: 'tata',
			gender: 'male',
			firstName: 'Victor',
			lastName: 'Durand',
			registrationDate: '2018-07-01',
			lastConnection: '2018-07-01',
			isConnected: true,
			profilPicture: '/assets/user.svg',
			description: 'Description de Victor Durand. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1985-12-02',
			promotion: '2014'
		},
		{ 	id: 3,
			location: { id: 1, town: 'Paris', province: 'Ile de France', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
			grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
			email: 'manon.dumont@gmail.com',
			password: 'titi',
			gender: 'female',
			firstName: 'Manon',
			lastName: 'Dumont',
			registrationDate: '2018-05-04',
			lastConnection: '2018-06-11',
			isConnected: true,
			profilPicture: '/assets/user.svg',
			description: 'Description de Manon Dumont. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1992-02-14',
			promotion: '2002'
		},
		{ 	id: 4,
			location: { id: 1, town: 'Douais', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2016', groupDescription: 'Les anciens de 2016!', nbMembers: 56},
			grade: { id: 2, gradeName: 'Modérateur', gradeDescription: 'Modérateur du réseau NDA'},
			email: 'eric.dutronc@gmail.com',
			password: 'tutu',
			gender: 'male',
			firstName: 'Eric',
			lastName: 'Dutronc',
			registrationDate: '2017-03-25',
			lastConnection: '2018-01-03',
			isConnected: true,
			profilPicture: '/assets/user.svg',
			description: 'Description de Alexandre Dutronc. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1995-03-17',
			promotion: '2013'
		},
		{ 	id: 5,
			location: { id: 1, town: 'Lomme', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
			grade: { id: 3, gradeName: 'Administrateur', gradeDescription: 'Administrateur du réseau NDA'},
			email: 'celine.duont@gmail.com',
			password: 'toto',
			gender: 'female',
			firstName: 'Céline',
			lastName: 'Duont',
			registrationDate: '2018-07-01',
			lastConnection: '2018-07-01',
			isConnected: true,
			profilPicture: '/assets/user.svg',
			description: 'Description de Céline Duont. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1992-04-26',
			promotion: '2017'
		},
		{ 	id: 6,
			location: { id: 1, town: 'Lille', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
			grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
			email: 'julie.dutronc@gmail.com',
			password: 'toto',
			gender: 'female',
			firstName: 'Julie',
			lastName: 'Dutronc',
			registrationDate: '2018-07-01',
			lastConnection: '2018-07-01',
			isConnected: true,
			profilPicture: '/assets/user.svg',
			description: 'Description de Romain Dupont. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1992-02-15',
			promotion: '2002'
		},
		{ 	id: 7,
			location: { id: 1, town: 'Lille', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2010', groupDescription: 'Les anciens de 2010!', nbMembers: 15},
			grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
			email: 'alexandre.rie@gmail.com',
			password: 'tata',
			gender: 'male',
			firstName: 'Alexandre',
			lastName: 'Rie',
			registrationDate: '2018-07-01',
			lastConnection: '2018-07-01',
			isConnected: true,
			profilPicture: '/assets/user.svg',
			description: 'Description de Victor Durand. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1985-02-12',
			promotion: '2000'
		},
		{ 	id: 8,
			location: { id: 1, town: 'Lille', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
			grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
			email: 'christopher.alys@gmail.com',
			password: 'titi',
			gender: 'male',
			firstName: 'Christopher',
			lastName: 'Alys',
			registrationDate: '2017-07-21',
			lastConnection: '2018-04-20',
			isConnected: true,
			profilPicture: '/assets/user.svg',
			description: 'Description de Manon Dumont. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1992-02-14',
			promotion: '2012'
		},
		{ 	id: 9,
			location: { id: 1, town: 'St-Omer', province: 'Pas de Calais', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
			grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
			email: 'celine.rock@gmail.com',
			password: 'tutu',
			gender: 'female',
			firstName: 'Céline',
			lastName: 'Rock',
			registrationDate: '2018-03-17',
			lastConnection: '2018-06-04',
			isConnected: true,
			profilPicture: '/assets/user.svg',
			description: 'Description de Alexandre Dutronc. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1995-03-17',
			promotion: '2004'
		},
		{ 	id: 10,
			location: { id: 1, town: 'St-Amand-les-Eaux', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
			grade: { id: 2, gradeName: 'Modérateur', gradeDescription: 'Modérateur du réseau NDA'},
			email: 'chloe.dupont@gmail.com',
			password: 'toto',
			gender: 'female',
			firstName: 'Chloé',
			lastName: 'Dupont',
			registrationDate: '2018-07-01',
			lastConnection: '2018-07-01',
			isConnected: true,
			profilPicture: '/assets/user.svg',
			description: 'Description de Céline Duont. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1992-09-08',
			promotion: '2013'
		}*/
	];

	constructor(private http: Http, private authService: AuthService) { }

	// Function to create headers, add token, to be used in HTTP requests
	createAuthentificationHeaders() {
		this.authService.loadToken(); // Get token so it can be attached to headers
		// Headers configuration options
		this.options = new RequestOptions({
		  headers: new Headers({
			'Content-Type': 'application/json', // Format set to JSON
			'authorization': this.authService.authToken // Attach token
		  })
		});
	}

	getUserList():User[] {
		return this.users;
	}

	// Function to get user profile data
	getUserProfile(id) {
		this.createAuthentificationHeaders(); // Create headers
		return this.http.get(this.domain + 'authentification/profile/' + id, this.options).map(res => res.json());
	}
}