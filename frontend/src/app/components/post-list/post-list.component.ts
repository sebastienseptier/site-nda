import { Component, OnInit } from '@angular/core';
import { PostListService } from '../../services/post-list.service';
import { Post } from '../../models/post';
import { PaginationService } from '../../services/pagination.service';

@Component({
	selector: 'app-posts',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	private posts: Post[];
	private pagedPosts: Post[];
	private pagination: any = {};

	constructor(private postListService: PostListService, private paginationService: PaginationService) {}

	ngOnInit() {
		this.posts = this.postListService.getPostList();
		this.setPage(1);
	}

	setPage(page: number) {
        //récupère un objet pagination depuis le service
        this.pagination = this.paginationService.getPagination(this.posts.length, page, 3);
        //selectionne le contenu de la page actuelle
        this.pagedPosts = this.posts.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
    }
}