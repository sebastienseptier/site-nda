import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { Post } from '../../../../models/post';

@Component({
	selector: 'app-post-sidebar',
	templateUrl: './post-sidebar.component.html',
	styleUrls: ['./post-sidebar.component.css']
})
export class PostSidebarComponent implements OnInit {

	tags: string[];
	usedTags: string[] = [];
	posts: Post[];

	constructor(private postService: PostService) { }

	ngOnInit() {
		this.posts = this.postService.getMostReadPostList();
		this.tags = this.postService.getTagList();
	}

	/**
	 * Gestion de la selection des tags, et mis à jour du style.
	 **/
	toggleTag(tag: string) {
		let tagName = tag.toUpperCase();
		let tagButton = document.getElementById('tag'+tagName);
		
		if (this.usedTags.includes(tagName)) {
			this.usedTags.splice(this.usedTags.indexOf(tagName), 1);
			tagButton.className = "btn btn-light btn-sm mb-1";
		}	
		else {
			this.usedTags.push(tagName);
			tagButton.className += " tagUsed";
		}
	}
}