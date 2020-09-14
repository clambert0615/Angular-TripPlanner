import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'overview', component: OverviewComponent},
  { path: '', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
