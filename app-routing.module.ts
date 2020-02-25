import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { AddprojectComponent } from './addproject/addproject.component';

import { UpdateprojectComponent } from './projects/updateproject/updateproject.component';
import { DisplayprojectsComponent } from './projects/displayprojects/displayprojects.component';
import { DeleteprojectsComponent } from './projects/deleteprojects/deleteprojects.component';



const routes: Routes = [
  {
    path:'',component:RegisterComponent
  },


  {path:'login',component:LoginComponent},
  
  {path:'register',component:RegisterComponent},

  {path:'projectlist',component:ProjectlistComponent},

  {path:'addproject',component:AddprojectComponent},

  

  {path:'updateproject/:pid',component:UpdateprojectComponent},

  {path:'updateproject',component:UpdateprojectComponent},

  {path:'deleteprojects',component:UpdateprojectComponent},

  {path:'displayprojects', component:DisplayprojectsComponent},

  {path:'deleteprojects/:pid', component:DeleteprojectsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
