import { Component, OnInit, Input } from '@angular/core';
import { CommentListService } from '../../../../services/comment-list.service';

@Component({
	selector: 'app-comment-list',
	templateUrl: './comment-list.component.html',
	styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

	@Input() postId: number;
	private comments: Comment[];

	constructor(private commentListService: CommentListService) {}

	ngOnInit() {
		this.comments = this.commentListService.getCommentListByPostId(this.postId);
	}

}