import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardComponent } from './components/guards/auth.guard.component';
import { CarComponent } from './components/car/car.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { BikeComponent } from './components/bike/bike.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule), },
  { path: 'login', component: LoginComponent },
  { path: 'iReport', component: QuestionsComponent },
  { path: 'bike', component: BikeComponent, canActivate: [AuthGuardComponent] },
  { path: 'car', component: CarComponent, canActivate: [AuthGuardComponent] },
  // { path: 'car', component: CarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
