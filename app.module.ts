import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { AddprojectComponent } from './addproject/addproject.component';


import { HttpClientModule } from '@angular/common/http';
import { ProjectsModule } from './projects/projects.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ProjectserviceService } from './projects/projectservice.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProjectlistComponent,
    AddprojectComponent,
    
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProjectsModule,
    ReactiveFormsModule
  ],
  providers: [ProjectserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
