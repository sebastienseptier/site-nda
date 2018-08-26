import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from '../../../services/pagination.service';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	//Informations à recevoir lors de l'appel du component table.
	@Input() type: string;
	@Input() data: any[];
	@Input() privilege: string = 'membre';
	
	//Données de filtrage et de pagination.
	pagedData: any[];
	pagination: any = {};
	isDesc: boolean = true;
	column: String = 'id';
	searchText: String = '';
	searchProperty;

	constructor(private paginationService: PaginationService) { }

	ngOnInit() {
		//Définit le colonne de recherche suivant le type de donnée reçue.
		switch(this.type) {
			case 'user':
				this.searchProperty = 'name';
			break;
			case 'post':
				this.searchProperty = 'title';
			break;
			case 'comment':
				this.searchProperty = 'author.name';
			break;
			default:
				this.searchProperty = 'id';
			break;
		}
		this.setPage(1, 'id');
	}

	/**
	 * Fonction permettant de filtrer, de trier, puis de découper les données en plusieurs pages.
	 * @param page Le numéro de page souhaité
	 */
	setPage(page: number = 1, property: String = '') {
		//Filtrage s'il y a un mot clé entré.
		if (this.searchText == '')
			this.pagedData = this.data;
		else
			this.pagedData = this.transform();
		//Triage des données par la catégorie si renseignée.
		if (property != '')
			this.sort(property);
        //Récupère un objet pagination depuis le service
        this.pagination = this.paginationService.getPagination(this.pagedData.length, page, 5);
        //Sélectionne le contenu de la page actuelle
        this.pagedData = this.pagedData.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
	}
	
	/**
	 * Fonction permettant de trier les données dans l'ordre croissant ou décroissant.
	 * @param property Le champ de la colonne à trier, peut être de la forme 'property' ou 'property.property'.
	 */
	sort(property) : void {
		this.isDesc = !this.isDesc; //Change la direction
		let direction = this.isDesc ? 1 : -1;

		if (property.indexOf('.') > -1) {
			//Double propriété reçue
			this.column = property.split('.')[1];
			this.pagedData.sort(function(a, b){
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
			this.pagedData.sort(function(a, b){
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
		var jsonKey = this.searchProperty;
		var searchText = this.searchText;

		if(searchText == null || searchText == 'undefined') return this.data;
		if(jsonKey    == null || jsonKey    == 'undefined') return this.data;

		//Copie du tableau pour la recherche
		var returnObjects = this.data;

		this.data.forEach( function ( filterObjectEntery ) {

			if (jsonKey.indexOf('.') > -1) {
				//Double propriété reçue
				if ( typeof filterObjectEntery[jsonKey.split('.')[0]][jsonKey.split('.')[1]] != "undefined" && 
				filterObjectEntery[jsonKey.split('.')[0]][jsonKey.split('.')[1]].toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
					//La valeur de l'objet contiens le mot entré par l'utilisateur.
				} else {
					//La valeur de l'objet ne contiens pas le mot entré par l'utilisateur, on le supprime.
					returnObjects = returnObjects.filter(obj => obj !== filterObjectEntery);
				}
			}
			else if( filterObjectEntery.hasOwnProperty( jsonKey ) ) {

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