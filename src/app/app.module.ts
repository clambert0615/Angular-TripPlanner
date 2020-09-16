import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserserviceService } from './userservice.service';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OverviewComponent } from './overview/overview.component';
import { CovidService } from './covid.service';
import { ZipService } from './zip.service';
import { PlacesService } from './places.service';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LodgingComponent } from './lodging/lodging.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HomepageComponent,
    OverviewComponent,
    RestaurantsComponent,
    LodgingComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserserviceService, CovidService, ZipService, PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
