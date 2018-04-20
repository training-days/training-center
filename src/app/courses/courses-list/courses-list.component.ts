import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CoursesService} from '../courses.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<any[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses$ = this.getCourses();
  }

  getCourses(): Observable<any[]> {
    return this.coursesService.findAll().pipe(
      map((response: any) => response.courses)
    );
  }

}
