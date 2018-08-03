import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../../../services/user-list.service';
import { ActivatedRoute, Router } from '../../../../../../node_modules/@angular/router';
import { User } from '../../../../models/user';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	private user: User;
	private requestedId: number;
	
	constructor(private userListService: UserListService, private activatedRoute: ActivatedRoute, private router: Router) {
		this.requestedId = this.activatedRoute.snapshot.params['id'];
		this.user = this.userListService.getUserById(this.requestedId);
		
		//Redirecion si le post n'a pu être trouvé.
		if (this.user == undefined)
			this.router.navigate(['/pageIntrouvee']);
	}

	ngOnInit() {
	}

}