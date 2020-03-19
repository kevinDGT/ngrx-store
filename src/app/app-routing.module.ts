import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {AuthGuard} from './helpers/auth.guard';
import {EditorComponent} from './components/editor/editor.component';
import {ReaderComponent} from './components/reader/reader.component';
import {SignatureComponent} from './components/signature/signature.component';
import {LoginComponent} from './components/login/login.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'reader', component: ReaderComponent, canActivate: [AuthGuard] },
  { path: 'editor', component: EditorComponent, canActivate: [AuthGuard] },
  { path: 'signature', component: SignatureComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
