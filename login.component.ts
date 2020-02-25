import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  std;

  constructor(private http: HttpClient, private router: Router) {


  }


  ngOnInit() {
  }


  onLogin(std) {
    console.log(std.value);
    this.http.post('http://localhost:3000/student', std.value).subscribe((result) => {
      this.router.navigateByUrl('/projectlist');
      console.log(result);

    });
  }

}


