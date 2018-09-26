import { Location } from './location';
import { Group } from './group';
import { Grade } from './grade';

export interface User {
    id: number;
	location: Location;
	group: Group;
	grade: Grade;
	email: String;
	password: String;
	gender: String;
	/*firstName: String;
	lastName: String;
	birthName:String;*/
	name:any;
	registrationDate: String;
	lastConnection: String;
	isConnected: boolean;
	profilPicture: String;
	description: String;
	changePassword: boolean;
	lockout: boolean;
	attempts: number;
	birthDate: String;
	promotion: String;
}