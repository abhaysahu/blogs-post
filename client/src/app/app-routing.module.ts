import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { AuthGuard } from './auth.guard';
import { NotAuthGuard } from './notauth.guard';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './blog/delete-blog/delete-blog.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';




const routes: Routes = [
  { path: '',
  component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'blog',
    component: BlogComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-blog/:id',
    component: EditBlogComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'delete-blog/:id',
    component: DeleteBlogComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:username',
    component: PublicProfileComponent,
    canActivate: [AuthGuard]
  },
  
  { path: '**', component: HomeComponent}

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
