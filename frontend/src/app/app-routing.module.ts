import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormAuthentificationComponent } from './components/forms/form-authentification/form-authentification.component';
import { FormInscriptionComponent } from './components/forms/form-inscription/form-inscription.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post-list/post/post.component';
import { FormPostComponent } from './components/forms/form-post/form-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
	{ path: 'authentification', component: FormAuthentificationComponent},
	{ path: 'inscription', component: FormInscriptionComponent},
	{ path: 'posts', component: PostListComponent},
	{ path: 'posts/:id', component: PostComponent},
	{ path: 'nouveau-post', component: FormPostComponent},
	{ path: 'pageIntrouvee', component: NotFoundComponent},
	{ path: '', component: HomeComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }