import { Component, OnInit } from '@angular/core';
import { DonutService } from '../services/donut.services';
import Donut from '../models/donut';
import { Response } from '@angular/http';

@Component({
  selector: 'app-make-adonut',
  templateUrl: './make-adonut.component.html',
  styleUrls: ['./make-adonut.component.scss']
})
export class MakeAdonutComponent implements OnInit {

  
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

}
