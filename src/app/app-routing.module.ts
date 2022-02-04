import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { PeopleComponent } from './people/people.component';
import { DocumentsComponent } from './documents/documents.component';
import { EventsComponent } from './events/events.component';
import { CommunitiesComponent } from './communities/communities.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ChannelsComponent } from './channels/channels.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'home',component: HomeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'communities', component: CommunitiesComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'channels', component: ChannelsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

