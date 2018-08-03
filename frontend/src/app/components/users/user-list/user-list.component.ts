import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../../services/user-list.service';
import { PaginationService } from '../../../services/pagination.service';
import { User } from '../../../models/user';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css'] 
})
export class UserListComponent implements OnInit {

	private users: User[];
	private pagedUsers: User[];
	private pagination: any = {};
	private isDesc: boolean = true;
	private column: String = 'id';
	private searchText: String = '';

	constructor(private userListService: UserListService, private paginationService: PaginationService) { }

	ngOnInit() {
		this.users = this.userListService.getUserList();
		this.setPage(1, 'id');
	}

	/**
	 * Fonction permettant de filtrer, de trier, puis de découper les données en plusieurs pages.
	 * @param page Le numéro de page souhaité
	 */
	setPage(page: number = 1, property: String = '') {
		//Filtrage s'il y a un mot clé entré.
		if (this.searchText == '')
			this.pagedUsers = this.users;
		else
			this.pagedUsers = this.transform();
		//Triage des données par la catégorie si renseignée.
		if (property != '')
			this.sort(property);
        //récupère un objet pagination depuis le service
        this.pagination = this.paginationService.getPagination(this.pagedUsers.length, page, 5);
        //selectionne le contenu de la page actuelle
        this.pagedUsers = this.pagedUsers.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
	}
	
	/**
	 * Fonction permettant de trier les données dans l'ordre croissant ou décroissant.
	 * @param property Le champ de la colonne à trier, peut être de la forme 'property' ou 'property.property'.
	 */
	sort(property) {
		this.isDesc = !this.isDesc; //Change la direction
		let direction = this.isDesc ? 1 : -1;

		if (property.indexOf('.') > -1) {
			//Double propriété reçue
			this.column = property.split('.')[1];
			this.pagedUsers.sort(function(a, b){
				if(a[property.split('.')[0]][property.split('.')[1]] < b[property.split('.')[0]][property.split('.')[1]]){
					return -1 * direction;
				}
				else if(a[property.split('.')[0]][property.split('.')[1]] > b[property.split('.')[0]][property.split('.')[1]]){
					return 1 * direction;
				}
				else{
					return 0;
				}
			});
		}
		else {
			//Propriété simple
			this.column = property;
			this.pagedUsers.sort(function(a, b){
				if(a[property] < b[property]){
					return -1 * direction;
				}
				else if( a[property] > b[property]){
					return 1 * direction;
				}
				else{
					return 0;
				}
			});
		}
	}

	/**
	 * Fonction permettant de transformer les données en tableau d'objets filtrés par mot clé suivant l'attribut 'name'.
	 */
	transform() : any[] {
		//Attribut de recherche
		var jsonKey = 'name';
		var searchText = this.searchText;

		if(searchText == null || searchText == 'undefined') return this.users;
		if(jsonKey    == null || jsonKey    == 'undefined') return this.users;

		//Copie du tableau pour la recherche
		var returnObjects = this.users;

		this.users.forEach( function ( filterObjectEntery ) {

			if( filterObjectEntery.hasOwnProperty( jsonKey ) ) {

				if ( typeof filterObjectEntery[jsonKey] != "undefined" && 
				filterObjectEntery[jsonKey].toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
					//La valeur de l'objet contiens le mot entré par l'utilisateur.
				} else {
					//La valeur de l'objet ne contiens pas le mot entré par l'utilisateur, on le supprime.
					returnObjects = returnObjects.filter(obj => obj !== filterObjectEntery);
				}
			} else {
				console.log('Erreur: l\'attribut de recherche n\'existe pas dans les objets donnés.');
			}
		});
		return returnObjects;
	}
}