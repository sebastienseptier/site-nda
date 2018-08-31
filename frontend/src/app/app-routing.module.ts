import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './components/metier/portal/portal.component';
import { PostsComponent } from './components/metier/posts/posts.component';
import { PostComponent } from './components/util/list-post/post/post.component';
import { FormPostComponent } from './components/util/form-post/form-post.component';
import { UsersComponent } from './components/metier/users/users.component';
import { UserComponent } from './components/util/list-user/user/user.component';
import { AdministrationComponent } from './components/metier/administration/administration.component';
import { AboutComponent } from './components/metier/about/about.component';
import { NotFoundComponent } from './components/metier/not-found/not-found.component';
import { HomeComponent } from './components/metier/home/home.component';
import { ThermsPrivacyComponent } from './components/metier/therms-privacy/therms-privacy.component';
import { ContactsComponent } from './components/metier/contacts/contacts.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NotAuthGuardService } from './guards/not-auth-guard.service';

const appRoutes: Routes = [
	{ path: 'authentification', component: PortalComponent, canActivate: [NotAuthGuardService]},
	{ path: 'inscription', component: PortalComponent, canActivate: [NotAuthGuardService]},
	{ path: 'posts', component: PostsComponent, canActivate: [AuthGuardService]},
	{ path: 'posts/:id', component: PostComponent, canActivate: [AuthGuardService]},
	{ path: 'nouveau-post', component: FormPostComponent, canActivate: [AuthGuardService]},
	{ path: 'membres', component: UsersComponent, canActivate: [AuthGuardService]},
	{ path: 'membres/:id', component: UserComponent, canActivate: [AuthGuardService]},
	{ path: 'administration', component: AdministrationComponent, canActivate: [AuthGuardService]},
	{ path: 'apropos', component: AboutComponent},
	{ path: 'contacts', component: ContactsComponent},
	{ path: 'mentions-legales', component: ThermsPrivacyComponent},
	{ path: 'pageIntrouvee', component: NotFoundComponent},
	{ path: '', component: HomeComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }