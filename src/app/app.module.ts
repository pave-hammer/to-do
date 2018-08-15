import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CompletedComponent } from './components/completed/completed.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';

import { DataService } from './service/list-data.service';
import { ListDataApiService } from './api/list-data-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CompletedComponent,
    SidenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, ListDataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
