import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardComponent } from './components/guards/auth.guard.component';
import { IMechanicComponent } from './components/i-mechanic/i-mechanic.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule), },
  { path: 'login', component: LoginComponent },
  { path: 'iReport', component: QuestionsComponent },
  { path: 'iMechanic', component: IMechanicComponent, canActivate: [AuthGuardComponent] },
  // { path: 'iMechanic', component: IMechanicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
