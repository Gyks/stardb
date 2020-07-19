export default class SwapiService {
  _apiBase = "https://swapi.dev/api";
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} — recived ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map((planet) => this._transformPlanet(planet));
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }

  _extractId(planet) {
    let re = /\/(\d+)\//;
    return planet.url.match(re)[1];
  }
  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      gender: person.gender,
      height: person.height,
      mass: person.mass,
      name: person.name,
      hairColor: person.hair_color,
      birthDate: person.birth_year,
    };
  }
  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      model: starship.model,
      starshipClass: starship.starship_class,
      costInCredits: starship.cost_in_credits,
      crew: starship.crew,
    };
  }
}
