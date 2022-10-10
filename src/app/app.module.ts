import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';

const link:Routes=[
  {path:"",component:NewsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
