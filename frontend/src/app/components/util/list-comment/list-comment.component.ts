import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-list-comment',
	templateUrl: './list-comment.component.html',
	styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {

	@Input() postId: number;
	comments: Comment[];
	myform: FormGroup;
	comment: FormControl;

	constructor(private commentService: CommentService) {}

	ngOnInit() {
		this.comments = this.commentService.getCommentListByPostId(this.postId);
		this.createFormControls();
		this.createForm();
	}

	createFormControls() {
		this.comment = new FormControl('', [Validators.required]);
	}
	
	createForm() {
		this.myform = new FormGroup({
			comment: this.comment
		});
	}
}