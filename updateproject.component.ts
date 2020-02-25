import { Component, OnInit } from '@angular/core';
import { ProjectserviceService } from '../projectservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent implements OnInit {

  pros;
  sno;
  pro;
  pid;
  title;
  cat;
  team;
  desc;
  tech;
  constructor(private ps: ProjectserviceService, private route: ActivatedRoute, private http: HttpClient,private router:Router) {


  }



  ngOnInit() {
    let p = this.route.params.subscribe((params) => {
      this.pid = params.pid;

    })
    this.ps.getProject(this.pid, (result) => {
      this.pro = result[0];
      this.pid = this.pro.pid;
      this.title = this.pro.title;
      this.cat = this.pro.cat;
      this.team = this.pro.team;
      this.desc = this.pro.desc;
      this.tech = this.pro.tech;
    })


  }

  onUpdateProject(pro) {
    console.log(pro.value.pid)
    this.http.put('http://localhost:3000/projects/' + pro.value.pid, pro.value).subscribe((result) => {
       this.router.navigateByUrl('/displayprojects');
      this.pros = result;
      console.log(result)

    })
  }

  // onDeleteProject(pro) {
  //   console.log(pro.value.pid);
  //   this.http.delete('http://localhost:3000/projects/' + pro.value.pid).subscribe((result) => {
  //     console.log(result);
  //   })
  // }






}
