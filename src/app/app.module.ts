import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NestedComponent1Component } from './components/nested-component-1/nested-component-1.component';
import { NestedComponent2Component } from './components/nested-component-2/nested-component-2.component';
import { EmpleadosListaComponent } from './components/empleados-lista/empleados-lista.component';
=======
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { MySidebarComponent } from './components/my-sidebar/my-sidebar.component';
import { StudensPageComponent } from './components/studens-page/studens-page.component';
>>>>>>> 2d695226e53df50d66146fc4756825870ac167f3

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NestedComponent1Component,
    NestedComponent2Component,
    EmpleadosListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration()
  ],
=======
    MyHeaderComponent,
    MySidebarComponent,
    StudensPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
>>>>>>> 2d695226e53df50d66146fc4756825870ac167f3
  bootstrap: [AppComponent]
})
export class AppModule { }
