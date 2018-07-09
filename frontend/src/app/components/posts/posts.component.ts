import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

	tags: string[] = [];
	constructor() { }

	ngOnInit() {
	}

	removeAccents(str) {
		var accents    = 'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
		var accentsOut = "AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
		str = str.split('');
		var strLen = str.length;
		var i, x;

		for (i = 0; i < strLen; i++) {
		  if ((x = accents.indexOf(str[i])) != -1) {
			str[i] = accentsOut[x];
		  }
		}
		return str.join('');
	  }

	/**
	 * Gestion de la selection des tags, et mis à jour du style.
	 **/
	toggleTag(tag: string) {
		let tagName = this.removeAccents(tag);
		let tagButton = document.getElementById('tag'+tagName);
		
		if (this.tags.includes(tagName)) {
			this.tags.splice(this.tags.indexOf(tagName), 1);
			tagButton.className = "btn btn-light btn-sm mb-1";
		}	
		else {
			this.tags.push(tagName);
			tagButton.className += " tagUsed";
		}
	}
}