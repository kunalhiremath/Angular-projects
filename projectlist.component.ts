import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent {

 pros;
  constructor(private http : HttpClient,private router:Router){
  this.http.get('http://localhost:3000/projects').subscribe((result)=>{
    this.pros =result;
    
  })
  }

 onClick(title){
  this.router.navigate(['/deleteproject'])
  console.log(title);
 }
  

}
