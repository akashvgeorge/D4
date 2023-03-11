import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictpageComponent } from './districtpage/districtpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SinglepageComponent } from './singlepage/singlepage.component';

@NgModule({
  declarations: [
    AppComponent,
  
    DistrictpageComponent,
    SignuppageComponent,
    SigninpageComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    SinglepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
