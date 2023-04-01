import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardComponent } from './components/guards/auth.guard.component';
import { MatSelectModule } from '@angular/material/select';
import { SharedComponentsModule } from './shared-components/shared.components/shared.components.module';
import { QuestionsComponent } from './components/questions/questions.component';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:7166'],
        disallowedRoutes: [],
      },
    }),
    SharedComponentsModule
  ],
  exports: [
  ],
  providers: [AuthGuardComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
