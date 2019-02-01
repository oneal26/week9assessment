import Donut from '../models/donut';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class DonutService {

  api_url = 'http://localhost:3000';
  donutUrl = `${this.api_url}/api/donuts`;

  constructor(private http: HttpClient) {}


  createDonut(donut: Donut): Observable<any>{
    //returns the observable of http donut request 
    return this.http.post(`${this.donutUrl}`, donut);
  }

  getDonuts(): Observable<Donut[]>{
    return this.http.get(this.donutUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Donut[];
    }))
  }

  editDonut(donut:Donut){
    let editUrl = `${this.donutUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, donut);
  }

  deleteDonut(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.donutUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

