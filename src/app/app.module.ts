import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './shared-components/shared.components/shared.components.module';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardComponent } from './components/guards/auth.guard.component';
import { IMechanicComponent } from './components/i-mechanic/i-mechanic.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IMechanicComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7166"],
        disallowedRoutes: []
      }
    }),
    SharedComponentsModule

  ],
  providers: [
    AuthGuardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
