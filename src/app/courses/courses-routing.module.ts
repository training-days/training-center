import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {CourseFormComponent} from './course-form/course-form.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';

const routes: Routes = [
  { path: '',
    component: CoursesPageComponent,
    children: [
      { path: '', component: CoursesListComponent },
      { path: 'details/:id', component: CourseDetailsComponent },
      { path: 'new', component: CourseFormComponent },
      { path: 'edit/:id', component: CourseFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
