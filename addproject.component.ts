import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent  {

  constructor(private http : HttpClient, private router:Router){}

  onAddPro(pro){
    console.log(pro.value);
    this.http.post('http://localhost:3000/projects',pro.value).subscribe((result)=>{
      this.router.navigateByUrl('/displayprojects');
      console.log(result);
    })
  }

}
