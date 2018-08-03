import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { FormAuthentificationComponent } from './components/forms/form-authentification/form-authentification.component';
import { FormPostComponent } from './components/forms/form-post/form-post.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostComponent } from './components/posts/post-list/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/users/user-list/user/user.component';
import { UsersComponent } from './components/users/users.component';

const appRoutes: Routes = [
	{ path: 'authentification', component: FormAuthentificationComponent},
	{ path: 'inscription', component: InscriptionComponent},
	{ path: 'posts', component: PostsComponent},
	{ path: 'posts/:id', component: PostComponent},
	{ path: 'nouveau-post', component: FormPostComponent},
	{ path: 'membres/:id', component: UserComponent},
	{ path: 'membres', component: UsersComponent},
	{ path: 'administration', component: AdministrationComponent},
	{ path: 'apropos', component: AboutComponent},
	{ path: 'pageIntrouvee', component: NotFoundComponent},
	{ path: '', component: HomeComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }