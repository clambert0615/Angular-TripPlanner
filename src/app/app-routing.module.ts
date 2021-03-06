import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { OverviewComponent } from './overview/overview.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LodgingComponent } from './lodging/lodging.component';
import { DetailsComponent } from './details/details.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { MoreComponent } from './more/more.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'overview', component: OverviewComponent},
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'lodging', component: LodgingComponent},
  { path: 'attractions', component: AttractionsComponent},
  { path: 'more', component: MoreComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: '', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
