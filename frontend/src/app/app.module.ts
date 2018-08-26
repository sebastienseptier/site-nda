import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/metier/header/header.component';
import { AboutComponent } from './components/metier/about/about.component';
import { AdministrationComponent } from './components/metier/administration/administration.component';
import { CommentComponent } from './components/util/list-comment/comment/comment.component';
import { ListCommentComponent } from './components/util/list-comment/list-comment.component';
import { FooterComponent } from './components/metier/footer/footer.component';
import { HomeComponent } from './components/metier/home/home.component';
import { FormAuthentificationComponent } from './components/util/form-authentification/form-authentification.component';
import { FormInscriptionComponent } from './components/util/form-inscription/form-inscription.component';
import { FormPostComponent } from './components/util/form-post/form-post.component';
import { NotFoundComponent } from './components/metier/not-found/not-found.component';
import { PostComponent } from './components/util/list-post/post/post.component';
import { ListPostComponent } from './components/util/list-post/list-post.component';
import { PostsComponent } from './components/metier/posts/posts.component';
import { PostSidebarComponent } from './components/metier/posts/post-sidebar/post-sidebar.component';
import { StatsComponent } from './components/metier/administration/stats/stats.component';
import { UserComponent } from './components/util/list-user/user/user.component';
import { ListUserComponent } from './components/util/list-user/list-user.component';
import { UsersComponent } from './components/metier/users/users.component';
import { PortalComponent } from './components/metier/portal/portal.component';

import { CommentService } from './services/comment.service';
import { PostService } from './services/post.service';
import { PaginationService } from './services/pagination.service';
import { UserService } from './services/user.service';
import { TableComponent } from './components/util/table/table.component';
import { ManageUserComponent } from './components/metier/administration/manage-user/manage-user.component';
import { ManagePostComponent } from './components/metier/administration/manage-post/manage-post.component';
import { ManageCommentComponent } from './components/metier/administration/manage-comment/manage-comment.component';
import { FormParametersComponent } from './components/util/form-parameters/form-parameters.component';
import { ThermsPrivacyComponent } from './components/metier/therms-privacy/therms-privacy.component';
import { ContactsComponent } from './components/metier/contacts/contacts.component';

@NgModule({
  	declarations: [
    	AppComponent,
    	HeaderComponent,
    	FooterComponent,
    	HomeComponent,
    	FormAuthentificationComponent,
    	FormInscriptionComponent,
    	ListPostComponent,
    	PostComponent,
    	PostSidebarComponent,
    	FormPostComponent,
    	CommentComponent,
    	ListCommentComponent,
    	NotFoundComponent,
    	UserComponent,
    	ListUserComponent,
    	PostsComponent,
    	PortalComponent,
    	AboutComponent,
    	AdministrationComponent,
    	StatsComponent,
    	UsersComponent,
    	TableComponent,
    	ManageUserComponent,
    	ManagePostComponent,
    	ManageCommentComponent,
    	FormParametersComponent,
    	ThermsPrivacyComponent,
    	ContactsComponent
  	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
        ReactiveFormsModule
	  ],
  		providers: [CommentService, PostService, PaginationService, UserService],
  		bootstrap: [AppComponent]
})
export class AppModule {}