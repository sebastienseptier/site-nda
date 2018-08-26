import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../../services/comment.service';

@Component({
	selector: 'app-manage-comment',
	templateUrl: './manage-comment.component.html',
	styleUrls: ['./manage-comment.component.css']
})
export class ManageCommentComponent implements OnInit {

	comments: Comment[];

	constructor(private commentService: CommentService) { }

	ngOnInit() {
		this.comments = this.commentService.getCommentList();
	}

}