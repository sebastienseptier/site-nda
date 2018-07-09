import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormAuthentificationComponent } from './components/forms/form-authentification/form-authentification.component';
import { FormInscriptionComponent } from './components/forms/form-inscription/form-inscription.component';
import { PostsComponent } from './components/posts/posts.component';

const appRoutes: Routes = [
	{ path: 'authentification', component: FormAuthentificationComponent},
	{ path: 'inscription', component: FormInscriptionComponent},
	{ path: 'posts', component: PostsComponent},
	{ path: '', component: HomeComponent },
	{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }