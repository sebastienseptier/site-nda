import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-portal',
	templateUrl: './portal.component.html',
	styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

	requestedPortal: string = '';
	newUser: boolean = true;

	constructor(private route:ActivatedRoute) {}
  
	ngOnInit() {
		this.requestedPortal = this.route.snapshot.url.map(segment => segment.path)[0];
		this.newUser = this.requestedPortal == 'inscription';
	}

}