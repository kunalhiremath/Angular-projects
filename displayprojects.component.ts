import { Component, OnInit } from '@angular/core';
import { ProjectserviceService } from '../projectservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-displayprojects',
  templateUrl: './displayprojects.component.html',
  styleUrls: ['./displayprojects.component.css']
})
export class DisplayprojectsComponent implements OnInit {
  
  
  projects;
  // desc: any;
  // pid: any;
  // team: any;
  // cat: any;
  // title: any;
  sno;

    constructor(private ps:ProjectserviceService,private router:Router,private route:ActivatedRoute,private http:HttpClient) {
      this.http.get('http://localhost:3000/projects').subscribe((result)=>{
        console.log(result);
        this.projects= result;
      })
   }




  ngOnInit() {
    // let p = this.route.params.subscribe((pm) => {
    //   this.sno = pm.sno;

    // })
    // this.ps.getProject(this.sno, (result) => {
    //   this.projects = result[0];
    //   this.pid = this.projects.pid;
    //   this.title = this.projects.title;
    //   this.cat = this.projects.cat;
    //   this.team = this.projects.team;
    //   this.desc = this.projects.desc;
    // })






  }

  onUpdate(pid){
    this.router.navigate(['/updateproject',pid]);

  }

  onDelete(pid){
    this.router.navigate(['/deleteprojects',pid]);

  }

  onAddProject(){
    this.router.navigate(['/addproject']);
  }

}
