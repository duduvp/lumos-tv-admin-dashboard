import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFireAuth } from '@angular/fire/auth';
import { MaterialModule } from './core/material.module';
import { VideosComponent } from './pages/videos/videos.component';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireDatabaseModule
  ],
  providers: [AngularFireAuth, AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
