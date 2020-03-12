import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RandomChildComponent} from './components/random-child/random-child.component';


const routes: Routes = [
  { path: 'random', component: RandomChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
