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
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  	declarations: [
    	AppComponent,
    	HeaderComponent,
    	FooterComponent,
    	HomeComponent,
    	FormAuthentificationComponent,
    	FormInscriptionComponent,
    	PostsComponent
  	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
  	],
  		providers: [],
  		bootstrap: [AppComponent]
})
export class AppModule {}