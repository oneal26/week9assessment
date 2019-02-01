import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MakeAdonutComponent } from './make-adonut/make-adonut.component';
import { EatAdonutComponent } from './eat-adonut/eat-adonut.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'makeAdonut', component: MakeAdonutComponent },
  { path: 'eatAdonut', component: EatAdonutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
