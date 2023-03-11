import { Component } from '@angular/core';
import { districts } from 'src/assets/data';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  district:any

ngOnInit(){
  let id=localStorage.getItem("title")
  this.district=districts.filter(e=>e.name==id)
  console.log(this.district)
}

}


