import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayprojectsComponent } from './displayprojects/displayprojects.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { DeleteprojectsComponent } from './deleteprojects/deleteprojects.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DisplayprojectsComponent,UpdateprojectComponent, DeleteprojectsComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[DisplayprojectsComponent,UpdateprojectComponent, DeleteprojectsComponent    
          
  ]
})
export class ProjectsModule { }
