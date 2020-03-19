import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {AuthGuard} from './helpers/auth.guard';
import {EditorComponent} from './components/editor/editor.component';
import {ReaderComponent} from './components/reader/reader.component';
import {SignatureComponent} from './components/signature/signature.component';



const routes: Routes = [
  // { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'user', component: UserComponent},
  { path: 'reader', component: ReaderComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'signature', component: SignatureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
