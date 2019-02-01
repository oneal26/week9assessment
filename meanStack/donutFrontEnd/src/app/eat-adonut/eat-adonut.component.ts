import { Component, OnInit } from '@angular/core';
import { DonutService } from '../services/donut.services';
import Donut from '../models/donut';
import { Response } from '@angular/http';

@Component({
  selector: 'app-eat-adonut',
  templateUrl: './eat-adonut.component.html',
  styleUrls: ['./eat-adonut.component.scss']
})
export class EatAdonutComponent implements OnInit {

  constructor(private donutService: DonutService) { }

  donutList: Donut[] = [];
  editDonuts: Donut[] = [];

  ngOnInit() {
    //At component initialization the 
    this.donutService.getDonuts()
      .subscribe(donuts => {
        //assign the Userlist property to the proper http response
        this.donutList = donuts
        console.log(donuts)
      })
  }

  deleteDonut(donut: Donut) {
    this.donutService.deleteDonut(donut._id).subscribe(res => {
      this.donutList.splice(this.donutList.indexOf(donut), 1);
    })
  }

}
