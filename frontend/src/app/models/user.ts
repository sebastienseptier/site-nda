import { Location } from './location';
import { Group } from './group';
import { Grade } from './grade';

export interface User {
    id: String;
	province: String;
	town: String;
	group: String;
	grade: String;
	email: String;
	password: String;
	gender: String;
	firstName: String;
	lastName: String;
	registrationDate: String;
	lastConnection: String;
	profilPicture: String;
	description: String;
	changePassword: Boolean;
	lockout: Boolean;
	attempts: Number;
	birthDate: String;
	promotion: String;
}