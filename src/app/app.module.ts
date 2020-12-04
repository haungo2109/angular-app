import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreNgModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from './chat/chat.module';
import { ActivitiesComponent } from './components/activities/activities.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ListFriendComponent } from './components/list-friend/list-friend.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ActivitiesComponent,
    PostNewComponent,
    PostListComponent,
    ListFriendComponent,
    CreatePostComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreNgModule,
    HttpClientModule,
    ChatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
