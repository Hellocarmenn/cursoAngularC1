import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { MySidebarComponent } from './components/my-sidebar/my-sidebar.component';
import { StudensPageComponent } from './components/studens-page/studens-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MySidebarComponent,
    StudensPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
