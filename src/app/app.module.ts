import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ComponentComponent } from './component/component.component';
import { LoginComponentsComponent } from './components/login-components/login-components.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComponentComponent,
    LoginComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
