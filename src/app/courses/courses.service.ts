import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Course} from './course';

@Injectable()
export class CoursesService {

  courses: Array<any> = [];
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  findAll(page: number = 0, size: number = 0): Observable<any[]> {
    // return this.http.get(`${this.apiUrl}/courses/page=${page}&size=${size}`) as Observable<any[]>;
    return this.http.get(`assets/courses.json`) as Observable<any[]>;
  }

  save(model: Course): Observable<any> {
    return this.http.post(`${this.apiUrl}/courses`, model) as Observable<any>;
  }

  edit(id: number, model: Course): Observable<any> {
    return this.http.put(`${this.apiUrl}/courses/${id}`, model) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/courses`) as Observable<any>;
  }

  findOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses/${id}`) as Observable<any>;
  }

}
