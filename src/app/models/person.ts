export class Person {
  public name: string;
  public birth_year: string;
  public eye_color: string;
  public gender: string;
  public hair_color: string;
  public height: string;
  public mass: string;
  public skin_color: string;
  public homeworld: string;
  public films: string;
  public species: string;
  public starships: string;
  public vehicles: string;
  public url: string;
  public created: string;
  public edited: string;

  Person(name: string,
         birth_year: string,
         eye_color: string,
         gender: string,
         hair_color: string,
         height: string,
         mass: string,
         skin_color: string,
         homeworld: string,
         films: string,
         species: string,
         starships: string,
         vehicles: string,
         url: string,
         created: string,
         edited) {
    this.name = name;
    this.birth_year = birth_year;
    this.eye_color = eye_color;
    this.gender = gender;
    this.hair_color = hair_color;
    this.height = height;
    this.mass = mass;
    this.skin_color = skin_color;
    this.homeworld = homeworld;
    this.films = films;
    this.species = species;
    this.starships = starships;
    this.vehicles = vehicles;
    this.url = url;
    this.created = created;
    this.edited = edited;
  }
}
