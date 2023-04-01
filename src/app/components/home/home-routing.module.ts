import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from '../questions/questions.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },

  // TODO uncomment
  // { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
