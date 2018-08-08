import { User } from "./user";

export interface Comment {
    id: number;
	postId: number;
	author: User;
	content: String;
	date: String;
}