import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {Routes, RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {appReducers} from './store/reducers/app.reducers';
import {UserService} from './services/user.service';
import {UserEffects} from './store/effects/user.effects';
import {UserComponent} from './components/user/user.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { EditorComponent } from './components/editor/editor.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { ReaderComponent } from './components/reader/reader.component';


const appRoutes: Routes = [
  {path: 'reader', component: ReaderComponent},
  {path: 'user', component: UserComponent},
  {path: 'editor', component: EditorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EditorComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSliderModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    MatProgressBarModule,
    CKEditorModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
