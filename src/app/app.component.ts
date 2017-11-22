import { Component, OnInit } from '@angular/core';
import { DataRepoService } from './data-repo.service';
import { PeopleResponse } from './models/people-response';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pageNumber = 0;
  public people: Person[] = [];

  constructor(public dataRepo: DataRepoService) {
  }

  ngOnInit() {
    this.nextPage();
  }

  nextPage() {
    this.pageNumber++;
    this.dataRepo.getPeople(this.pageNumber).subscribe((data: PeopleResponse) => {
      this.people = this.people.concat(data.results);
    });
  }
}
