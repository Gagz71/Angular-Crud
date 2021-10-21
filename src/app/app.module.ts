import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SeriesComponent } from './views/series/series.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './views/login/login.component';
import { ErrorComponent } from './views/error/error.component';
import { SingleSerieComponent } from './views/single-serie/single-serie.component';
import {SerieService} from "./services/serie/serie.service";
import {AuthService} from "./services/auth/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { SeriesCardComponent } from './components/series-card/series-card.component';
import {DatePipe} from "@angular/common";
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { AddSerieComponent } from './views/add-serie/add-serie.component';
import { EditSerieComponent } from './views/edit-serie/edit-serie.component';
import {CommentService} from "./services/comment/comment.service";
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { AddCommentComponent } from './views/add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeriesComponent,
    LoginComponent,
    ErrorComponent,
    SingleSerieComponent,
    SeriesCardComponent,
    SerieFormComponent,
    ErrorsFormComponent,
    AddSerieComponent,
    EditSerieComponent,
    CommentFormComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  FormsModule,
	  ReactiveFormsModule
  ],
  providers: [
	  AuthService,
	  SerieService,
	  CommentService,
	  DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
