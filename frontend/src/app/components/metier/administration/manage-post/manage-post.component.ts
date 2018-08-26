import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { Post } from '../../../../models/post';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.css']
})
export class ManagePostComponent implements OnInit {

  	posts: Post[];

	constructor(private postService: PostService) { }

	ngOnInit() {
		this.posts = this.postService.getPostList();
	}

}