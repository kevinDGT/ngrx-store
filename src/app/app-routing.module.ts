import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RandomChildComponent} from './components/random-child/random-child.component';
import {UserComponent} from './components/user/user.component';
import {AuthGuard} from './helpers/auth.guard';
import {EditorComponent} from './components/editor/editor.component';


const routes: Routes = [
  // { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'user', component: UserComponent},
  { path: 'random', component: RandomChildComponent },
  { path: 'editor', component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
