import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormAuthentificationComponent } from './components/forms/form-authentification/form-authentification.component';
import { PostComponent } from './components/posts/post-list/post/post.component';
import { FormPostComponent } from './components/forms/form-post/form-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user-list/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

const appRoutes: Routes = [
	{ path: 'authentification', component: FormAuthentificationComponent},
	{ path: 'inscription', component: InscriptionComponent},
	{ path: 'posts', component: PostsComponent},
	{ path: 'posts/:id', component: PostComponent},
	{ path: 'nouveau-post', component: FormPostComponent},
	{ path: 'utilisateurs', component: UserListComponent},
	{ path: 'utilisateurs/:name', component: UserComponent},
	{ path: 'communaute', component: UserListComponent},
	{ path: 'pageIntrouvee', component: NotFoundComponent},
	{ path: '', component: HomeComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }