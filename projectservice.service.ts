import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {


  

  constructor(private http:HttpClient) { }

//    getProjects(callback,pro){
//    this.http.get('http://localhost:3000/projects'+pro).subscribe((result)=>{
//     callback(result);
//   });
// }


getProject(pro,afterfetch){
  this.http.get('http://localhost:3000/projects/'+pro).subscribe((result)=>{
    afterfetch(result);
    
  });
}



}
