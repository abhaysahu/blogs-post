import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.guard';
import { NotAuthGuard } from './notauth.guard';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './blog.service';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './blog/delete-blog/delete-blog.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    PublicProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [AuthService,AuthGuard,NotAuthGuard,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
