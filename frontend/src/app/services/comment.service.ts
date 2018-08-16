import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {

	comments = [
		{ 	id: 1,
			postId: 3,
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
				promotion: 2002
			},
			content: 'Commentaire de Julie.',
			date: '04/07/18'
		},
		{ 	id: 2,
			postId: 1,
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
				promotion: 2012
			},
			content: 'Commentaire de Christopher.',
			date: '05/07/18'
		},
		{ 	id: 3,
			postId: 1,
			author: { 	id: 10,
				location: { id: 1, town: 'St-Amand-les-Eaux', province: 'Nord', country: 'France'},
				group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
				grade: { id: 2, gradeName: 'Modérateur', gradeDescription: 'Modérateur du réseau NDA'},
				email: 'chloe.dupont@gmail.com',
				password: 'toto',
				gender: 'female',
				name: 'Chloé',
				surname: 'Dupont',
				registrationDate: '2018-07-01',
				lastConnection: '2018-07-01',
				isConnected: true,
				profilPicture: '/assets/user.svg',
				description: 'Description de Céline Duont. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
				changePassword: false,
				lockout: false,
				attempts: 1,
				birthDate: '1992-09-08',
				promotion: 2013
			},
			content: 'Commentaire de Chloé.',
			date: '04/07/18'
		},
		{ 	id: 4,
			postId: 2,
			author: { 	id: 10,
				location: { id: 1, town: 'St-Amand-les-Eaux', province: 'Nord', country: 'France'},
				group: { id: 1, groupName: 'Promotion-2013', groupDescription: 'Les anciens de 2013!', nbMembers: 25},
				grade: { id: 2, gradeName: 'Modérateur', gradeDescription: 'Modérateur du réseau NDA'},
				email: 'chloe.dupont@gmail.com',
				password: 'toto',
				gender: 'female',
				name: 'Chloé',
				surname: 'Dupont',
				registrationDate: '2018-07-01',
				lastConnection: '2018-07-01',
				isConnected: true,
				profilPicture: '/assets/user.svg',
				description: 'Description de Céline Duont. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
				changePassword: false,
				lockout: false,
				attempts: 1,
				birthDate: '1992-09-08',
				promotion: 2013
			},
			content: 'Commentaire de Chloé.',
			date: '05/07/18'
		}
	];

	constructor() {}

	getCommentList():any[] {
		return this.comments;
	}

	getCommentListByPostId(postId: number):any[] {
		const comments = this.comments.filter(
		(c) => {
			return c.postId == postId;
		}
		);
		return comments;
	}
}