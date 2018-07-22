import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {

	private currentPage: number = 1
	private pageSize: number = 2;
	private totalItems: number;

	constructor() { }

	getPagination(totalItems, currentPage, pageSize) {
		//calcule le nombre de pages total
		let totalPages = Math.ceil(totalItems / pageSize);

		//contrôl de la position de la page
		if (currentPage < 1) { 
			currentPage = 1; 
		} else if (currentPage > totalPages) { 
			currentPage = totalPages; 
		}
		
		let startPage: number, endPage: number;
		if (totalPages <= 10) {
			//on affiche tous les onglets en dessous de 10 pages
			startPage = 1;
			endPage = totalPages;
		} else {
			//sinon on calcule quels index afficher
			if (currentPage <= 6) {
				startPage = 1;
				endPage = 10;
			} else if (currentPage + 4 >= totalPages) {
				startPage = totalPages - 9;
				endPage = totalPages;
			} else {
				startPage = currentPage - 5;
				endPage = currentPage + 4;
			}
		}

		let startIndex = (currentPage - 1) * pageSize;
		let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
		let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

		//retourne un objet avec tous les paramètres requis pour la vue
		return {
			totalItems: totalItems,
			currentPage: currentPage,
			pageSize: pageSize,
			totalPages: totalPages,
			startPage: startPage,
			endPage: endPage,
			startIndex: startIndex,
			endIndex: endIndex,
			pages: pages
		};
	}
}