import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictpageComponent } from './districtpage/districtpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { SinglepageComponent } from './singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'districtpage',component:DistrictpageComponent
  },
  {
    path:'signinpage',component:SigninpageComponent
  },
  {
    path:'signuppage',component:SignuppageComponent
  },
  {
    path:'singlepage',component:SinglepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
