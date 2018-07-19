import { Component, OnInit } from '@angular/core';
import { PostListService } from '../../services/post-list.service';
import { Post } from '../../models/post';

@Component({
	selector: 'app-posts',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	private posts: Post[];

	constructor(private postListService: PostListService) { 
		this.posts = this.postListService.getPostList();
	}

	ngOnInit() {
	}
}