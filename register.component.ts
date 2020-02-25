import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  std;
  

  constructor(private http: HttpClient,private router:Router) {
  
    
   }

   

  ngOnInit() {
  }

  onRegister(std){
    
    this.http.post('http://localhost:3000/student/',std.value).subscribe((result)=>{
      this.router.navigateByUrl('/projectlist')
      console.log(result);

    });
  }

}
