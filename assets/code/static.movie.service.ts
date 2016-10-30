import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  constructor() { 
  }

  getMovies() {
      return [{
          "id":278,
          "title":"The Shawshank Redemption"
      }, {
          "id":244786,
          "title":"Whiplash"
      }, {
          "id":238,
          "title":"The Godfather"
      }, {
          "id":157336,
          "title":"Interstellar"
      }]; 
    }
}
