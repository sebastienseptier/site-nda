import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	currentTime = new Date();
	year;

	constructor() {
		this.year = this.currentTime.getFullYear();
	}

	ngOnInit() {
	}

}