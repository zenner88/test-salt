import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideosComponent } from './videos/videos.component';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { DocumentsComponent } from './documents/documents.component';
import { EventsComponent } from './events/events.component';
import { CommunitiesComponent } from './communities/communities.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ChannelsComponent } from './channels/channels.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule  } from '@angular/common/http';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideosComponent,
    PeopleComponent,
    DocumentsComponent,
    EventsComponent,
    CommunitiesComponent,
    FavoritesComponent,
    ChannelsComponent,
    HomeComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: ''}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
