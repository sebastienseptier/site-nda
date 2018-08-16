import { User } from "./user";

export interface Post {
    id: number;
	title: String;
	author: User;
	content: String;
	date: String;
	coverPictureLink: String;
	tag: String;
	validate: boolean;
}