import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FirstSideComponent } from './components/first-side/first-side.component';
import { SecondSideComponent } from './components/second-side/second-side.component';
import { MessageComponentComponent } from './components/message-component/message-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstSideComponent,
    SecondSideComponent,
    MessageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
