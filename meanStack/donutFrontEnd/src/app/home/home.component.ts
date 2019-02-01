import { Component, OnInit } from '@angular/core';
import { DonutService } from '../services/donut.services';
import Donut from '../models/donut';
import { Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private donutService: DonutService) { }

  //Declaring the new User Object and initilizing it
  public newDonut: Donut = new Donut()

  //An Empty list for the visible User list
  donutList: Donut[] = [];
  editDonuts: Donut[] = [];

  ngOnInit(): void {

    //At component initialization the 
    this.donutService.getDonuts()
      .subscribe(donuts => {
        //assign the Userlist property to the proper http response
        this.donutList = donuts
        console.log(donuts)
      })
  }

  create() {
    this.donutService.createDonut(this.newDonut)
      .subscribe((res) => {
        this.donutList.push(res.data)
        this.newDonut = new Donut()
      })
  }



  editDonut(donut: Donut) {
    console.log(donut)
     if(this.donutList.includes(donut)){
      if(!this.editDonuts.includes(donut)){
        this.editDonuts.push(donut)
      }else{
        this.editDonuts.splice(this.editDonuts.indexOf(donut), 1)
        this.donutService.editDonut(donut).subscribe(res => {
          console.log('Update Succesful')
         }, err => {
            // this.editUser(User)
            console.error('Update Unsuccesful')
          })
        }
      }
    }

    submitDonut(event, donut:Donut){
      if(event.click){
        this.editDonut(donut)
      }
    }

    deleteUser(donut: Donut) {
      this.donutService.deleteDonut(donut._id).subscribe(res => {
        this.donutList.splice(this.donutList.indexOf(donut), 1);
      })
    }

}
