import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../../services/comment.service';

@Component({
	selector: 'app-list-comment',
	templateUrl: './list-comment.component.html',
	styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {

	@Input() postId: number;
	private comments: Comment[];

	constructor(private commentService: CommentService) {}

	ngOnInit() {
		this.comments = this.commentService.getCommentListByPostId(this.postId);
	}

}