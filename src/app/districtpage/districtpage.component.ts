import { Component } from '@angular/core';
import{ Router }from '@angular/router';
import { districts } from 'src/assets/data';
@Component({
  selector: 'app-districtpage',
  templateUrl: './districtpage.component.html',
  styleUrls: ['./districtpage.component.css']
})
export class DistrictpageComponent {
  collection = districts;
  constructor(public router : Router){

  }
  districts: any;
  ngOnInit(){
    this.districts=districts;
  }

  goTo(id:any){
    localStorage.setItem("title",id);
    this.router.navigate(['/singlepage']);
  }

}
