import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormAuthentificationComponent } from './components/forms/form-authentification/form-authentification.component';
import { FormInscriptionComponent } from './components/forms/form-inscription/form-inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostComponent } from './components/posts/post-list/post/post.component';
import { PostSidebarComponent } from './components/posts/post-sidebar/post-sidebar.component';
import { FormPostComponent } from './components/forms/form-post/form-post.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentComponent } from './components/comment-list/comment/comment.component';
import { PostListService } from './services/post-list.service';
import { CommentListService } from './services/comment-list.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PaginationService } from './services/pagination.service';
import { UserComponent } from './components/users/user-list/user/user.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserListService } from './services/user-list.service';
import { PostsComponent } from './components/posts/posts.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AboutComponent } from './components/about/about.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { StatsComponent } from './components/administration/stats/stats.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  	declarations: [
    	AppComponent,
    	HeaderComponent,
    	FooterComponent,
    	HomeComponent,
    	FormAuthentificationComponent,
    	FormInscriptionComponent,
    	PostListComponent,
    	PostComponent,
    	PostSidebarComponent,
    	FormPostComponent,
    	CommentComponent,
    	CommentListComponent,
    	NotFoundComponent,
    	UserComponent,
    	UserListComponent,
    	PostsComponent,
    	InscriptionComponent,
    	AboutComponent,
    	AdministrationComponent,
    	StatsComponent,
    	UsersComponent
  	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	  ],
  		providers: [CommentListService, PostListService, PaginationService, UserListService],
  		bootstrap: [AppComponent]
})
export class AppModule {}