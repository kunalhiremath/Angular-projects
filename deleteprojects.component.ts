import { Component, OnInit } from '@angular/core';
import { ProjectserviceService } from '../projectservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deleteprojects',
  templateUrl: './deleteprojects.component.html',
  styleUrls: ['./deleteprojects.component.css']
})
export class DeleteprojectsComponent implements OnInit {
  pros;
  sno;
  pro;
  pid;
  title;
  cat;
  team;
  desc;

  constructor(private ps: ProjectserviceService, private route: ActivatedRoute, private http: HttpClient, private router:Router) { }

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
    })




  }


  onDelete(pro) {
    this.http.delete('http://localhost:3000/projects/' + pro.value.pid).subscribe((result) => {
      this.router.navigateByUrl('/displayprojects');
      console.log(result)
      if (result) {
        alert("deleted successfully");
      } else if (!result) {
        alert("error")
      }
    })
  }












}
