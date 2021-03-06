import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

// Servicios
import { YoutubeService } from "./services/youtube.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { VideoYoutubePipe } from './pipes/video-youtube.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, VideoYoutubePipe],
  imports: [BrowserModule, AppRoutingModule, HttpModule],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
