import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormAuthentificationComponent } from './components/forms/form-authentification/form-authentification.component';
import { FormInscriptionComponent } from './components/forms/form-inscription/form-inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post-list/post/post.component';
import { PostSidebarComponent } from './components/post-list/post-sidebar/post-sidebar.component';
import { FormPostComponent } from './components/forms/form-post/form-post.component';
import { CommentListComponent } from './components/post-list/post/comment-list/comment-list.component';
import { CommentComponent } from './components/post-list/post/comment-list/comment/comment.component';
import { PostListService } from './services/post-list.service';
import { CommentListService } from './services/comment-list.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    	NotFoundComponent
  	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
  	],
  		providers: [CommentListService, PostListService],
  		bootstrap: [AppComponent]
})
export class AppModule {}