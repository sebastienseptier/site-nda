import { Component, OnInit } from '@angular/core';
import { PostListService } from '../../../../services/post-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../../models/post';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	private post: Post;
	private requestedId: number;
	
	constructor(private postListService: PostListService, private activatedRoute: ActivatedRoute, private router: Router) {
		this.requestedId = this.activatedRoute.snapshot.params['id'];
		this.post = this.postListService.getPostById(this.requestedId);
		
		//Redirecion si le post n'a pu être trouvé.
		if (this.post == undefined)
			this.router.navigate(['/pageIntrouvee']);
	}

	ngOnInit() {}
}