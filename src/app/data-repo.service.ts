import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PeopleResponse } from './models/people-response';

@Injectable()
export class DataRepoService {
  private baseUrl = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {
  }

  public getPeople(pageNumber: number): Observable<any> {
    console.log('Getting page ', pageNumber);
    return this.http.get<PeopleResponse>(this.baseUrl + 'people/?page=' + pageNumber);
  }
}
