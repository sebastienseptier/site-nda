import { Injectable } from '@angular/core';

@Injectable()
export class CommentListService {

  comments = [
    { 	id: 1,
		postId: 3,
		author: { 	id: 1,
			location: { id: 1, town: 'Lille', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
			grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
			email: 'romain.dupont@gmail.com',
			password: 'toto',
			name: 'Romain',
			surname: 'Dupont',
			registrationDate: '2018-07-01',
			lastConnection: '2018-07-01',
			isConnected: true,
			profilPicture: '/assets/user.png',
			description: 'Description de Romain Dupont. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1992-01-05',
			promotion: 2004
		},
		content: 'Commentaire de Romain.',
		date: '04/07/18'
    },
    { 	id: 2,
		postId: 1,
		author: { 	id: 2,
			location: { id: 1, town: 'Valenciennes', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2014', groupDescription: 'Les anciens de 2014!', nbMembers: 12},
			grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
			email: 'victor.durand@gmail.com',
			password: 'tata',
			name: 'Victor',
			surname: 'Durand',
			registrationDate: '2018-07-01',
			lastConnection: '2018-07-01',
			isConnected: true,
			profilPicture: '/assets/user.png',
			description: 'Description de Victor Durand. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1985-12-02',
			promotion: 2014
		},
		content: 'Commentaire de Victor.',
		date: '05/07/18'
    },
    { 	id: 3,
		postId: 1,
		author: { 	id: 4,
			location: { id: 1, town: 'Douais', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2016', groupDescription: 'Les anciens de 2016!', nbMembers: 56},
			grade: { id: 2, gradeName: 'Administrateur', gradeDescription: 'Administrateur du réseau NDA'},
			email: 'eric.dutronc@gmail.com',
			password: 'tutu',
			name: 'Eric',
			surname: 'Dutronc',
			registrationDate: '2017-03-25',
			lastConnection: '2018-01-03',
			isConnected: true,
			profilPicture: '/assets/user.png',
			description: 'Description de Alexandre Dutronc. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1995-03-17',
			promotion: 2013
		},
		content: 'Commentaire d\'Eric.',
		date: '04/07/18'
    },
    { 	id: 4,
		postId: 2,
		author: { 	id: 2,
			location: { id: 1, town: 'Valenciennes', province: 'Nord', country: 'France'},
			group: { id: 1, groupName: 'Promotion-2014', groupDescription: 'Les anciens de 2014!', nbMembers: 12},
			grade: { id: 1, gradeName: 'Membre', gradeDescription: 'Membre du réseau NDA'},
			email: 'victor.durand@gmail.com',
			password: 'tata',
			name: 'Victor',
			surname: 'Durand',
			registrationDate: '2018-07-01',
			lastConnection: '2018-07-01',
			isConnected: true,
			profilPicture: '/assets/user.png',
			description: 'Description de Victor Durand. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			changePassword: false,
			lockout: false,
			attempts: 1,
			birthDate: '1985-12-02',
			promotion: 2014
		},
		content: 'Commentaire de Victor.',
		date: '05/07/18'
    }
  ];

	constructor() { }

	getCommentListByPostId(postId: number):any[] {
		const comments = this.comments.filter(
		(c) => {
			return c.postId == postId;
		}
		);
		return comments;
	}
}