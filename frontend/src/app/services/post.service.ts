import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post';
import { Router } from '@angular/router';


@Injectable()
export class PostService {

	//Données temporaires, permet de tester l'utilisation des données.
  	posts = [
		{ 	id: 1,
			title: 'First post',
			author: { 	id: 6,
				location: { id: 1, town: 'Lille', province: 'Nord', country: 'France'},
				group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
				grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
				email: 'julie.dutronc@gmail.com',
				password: 'toto',
				gender: 'female',
				name: 'Julie',
				surname: 'Dutronc',
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
			content: 'Content for the first post. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.',
			date: '04/07/18',
			coverPictureLink: '../../../assets/photo_entry.jpg',
			tag: 'Travail',
			validate: true
		},
		{ 	id: 2,
			title: 'Second post',
			author: { 	id: 8,
				location: { id: 1, town: 'Lille', province: 'Nord', country: 'France'},
				group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
				grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
				email: 'christopher.alys@gmail.com',
				password: 'titi',
				gender: 'male',
				name: 'Christopher',
				surname: 'Alys',
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
			content: 'Content for the second post. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.',
			date: '08/07/18',
			coverPictureLink: '../../../assets/photo_entry.jpg',
			tag: 'Voyage',
			validate: false
		},
		{ 	id: 3,
			title: 'Third post',
			author: { 	id: 5,
				location: { id: 1, town: 'Lomme', province: 'Nord', country: 'France'},
				group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
				grade: { id: 2, gradeName: 'Administrateur', gradeDescription: 'Administrateur du réseau NDA'},
				email: 'celine.duont@gmail.com',
				password: 'toto',
				gender: 'female',
				name: 'Céline',
				surname: 'Duont',
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
			content: 'Content for the third post. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.',
			date: '09/07/18',
			coverPictureLink: '../../../assets/photo_entry.jpg',
			tag: 'Humour',
			validate: true
		},
		{ 	id: 4,
			title: 'Fourth post',
			author: { 	id: 1,
				location: { id: 1, town: 'Lille', province: 'Nord', country: 'France'},
				group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
				grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
				email: 'romain.dupont@gmail.com',
				password: 'toto',
				gender: 'male',
				name: 'Romain',
				surname: 'Dupont',
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
			content: 'Content for the fourth post. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.',
			date: '04/07/18',
			coverPictureLink: '../../../assets/photo_entry.jpg',
			tag: 'Travail',
			validate: true
		},
		{ 	id: 5,
			title: 'Fifth post',
			author: { 	id: 7,
				location: { id: 1, town: 'Lille', province: 'Nord', country: 'France'},
				group: { id: 1, groupName: 'Promotion-2010', groupDescription: 'Les anciens de 2010!', nbMembers: 15},
				grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
				email: 'alexandre.rie@gmail.com',
				password: 'tata',
				gender: 'male',
				name: 'Alexandre',
				surname: 'Rie',
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
			content: 'Content for the fith post. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.',
			date: '12/07/18',
			coverPictureLink: '../../../assets/photo_entry.jpg',
			tag: 'Photographie',
			validate: false
		}
	];

	tags = ['Boite à idées', 'Culture', 'Papotages & souvenirs', 'Associations & clubs', 'Evénements', 'Jobs [Offres et demandes]'];

  	constructor() { }

  	getPostList():Post[] {
    	return this.posts;
	}

	getTagList():string[] {
    	return this.tags;
	}

	getMostReadPostList():Post[] {
		//TODO:Retourner les posts les plus lus.
		return this.posts.slice(1, 3);
	}
	
	getPostById(id: number):Post {
		const post = this.posts.find(
			(p) => {
				return p.id == id;
		});	
		return post;
	}
}
