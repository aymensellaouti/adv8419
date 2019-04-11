import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cvTech/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {LoginComponent} from './login/login.component';
import {DetailCvComponent} from './cvTech/detail-cv/detail-cv.component';
import {Nf404Component} from './nf404/nf404.component';

const routes: Routes = [
  {path: '', redirectTo: 'cv', pathMatch: 'full'},
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: ':id', component: DetailCvComponent},
    ],
  },
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: Nf404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
