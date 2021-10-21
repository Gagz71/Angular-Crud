import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {SeriesComponent} from "./views/series/series.component";
import {SingleSerieComponent} from "./views/single-serie/single-serie.component";
import {ErrorComponent} from "./views/error/error.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {EditSerieComponent} from "./views/edit-serie/edit-serie.component";
import {AddSerieComponent} from "./views/add-serie/add-serie.component";
import {AddCommentComponent} from "./views/add-comment/add-comment.component";

const routes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'home', canActivate: [AuthGuard], component: SeriesComponent},
	{path: 'series/add',  canActivate: [AuthGuard],component: AddSerieComponent},
	{path: 'series/:id',  canActivate: [AuthGuard],component: SingleSerieComponent},
	{path: 'series/:id/edit',  canActivate: [AuthGuard],component: EditSerieComponent},
	{path: 'not-found', component: ErrorComponent},
	{path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
