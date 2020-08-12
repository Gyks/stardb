export default class SwapiService {
  _apiBase = "https://swapi.dev/api";
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} — recived ${res.status}`);
    }
    const body = await res.json();
    return body;
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map((planet) => this._transformPlanet(planet));
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  _extractId = (planet) => {
    let re = /\/(\d+)\//;
    return planet.url.match(re)[1];
  };
  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      gender: person.gender,
      height: person.height,
      mass: person.mass,
      name: person.name,
      hairColor: person.hair_color,
      birthDate: person.birth_year,
    };
  };
  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      model: starship.model,
      starshipClass: starship.starship_class,
      costInCredits: starship.cost_in_credits,
      crew: starship.crew,
      name: starship.name,
    };
  };
}
