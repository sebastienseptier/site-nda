import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../models/user';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	user: User;
	requestedId: number;
	
	constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
		this.requestedId = this.activatedRoute.snapshot.params['id'];
		this.user = this.userService.getUserById(this.requestedId);
		
		//Redirecion si le post n'a pu être trouvé.
		if (this.user == undefined)
			this.router.navigate(['/pageIntrouvee']);
	}

	ngOnInit() {
	}

}