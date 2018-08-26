import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';
import { PaginationService } from '../../../services/pagination.service';

@Component({
	selector: 'app-list-post',
	templateUrl: './list-post.component.html',
	styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

	posts: Post[];
	pagedPosts: Post[];
	pagination: any = {};

	constructor(private postService: PostService, private paginationService: PaginationService) {}

	ngOnInit() {
		this.posts = this.postService.getPostList();
		this.setPage(1);
	}

	setPage(page: number) {
        //récupère un objet pagination depuis le service
        this.pagination = this.paginationService.getPagination(this.posts.length, page, 3);
        //selectionne le contenu de la page actuelle
        this.pagedPosts = this.posts.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
    }
}