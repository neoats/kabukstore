import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavigationComponent } from './navigation/navigation.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { GalleryModule } from './gallery/gallery.module';
import { HomeModule } from './home/home.module';
import { NotfoundModule } from './notfound/notfound.module';

import { ServicesModule } from './services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services
import { ConfigService } from './shared/services/config.service';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

import { SocialComponent } from './social/social.component';
import { RouterModule } from '@angular/router';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    NavmenuComponent,
    SocialComponent,
  ],
  imports: [
    AboutModule,
    AppRoutingModule,
    BrowserModule,
    GalleryModule,
    HomeModule,
    HttpClientModule,
    NotfoundModule,
    ReactiveFormsModule,
    ServicesModule,
    BrowserAnimationsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
   

  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
