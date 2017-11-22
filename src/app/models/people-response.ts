import { Person } from './person';

export class PeopleResponse {
  public count: number;
  public next: string;
  public previous: string;
  public results: Person[];

  PersonResponse(count: number,
                 next: string,
                 previous: string,
                 results: Person[]) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
}
