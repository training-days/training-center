import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';

import { CoursesService } from './courses.service';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';


@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [CoursesListComponent, CourseDetailsComponent, CourseFormComponent, CoursesPageComponent],
  providers: [CoursesService]
})
export class CoursesModule { }
