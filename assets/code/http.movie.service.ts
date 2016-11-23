import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMovies() {
    const url = '//rawstack.azurewebsites.net' +
      '/api/movies';
    const headers = new Headers();
    headers.append('Accept', 'application/json');

    return this.http
      .get(url, { 
        headers 
      })
      .map(rsp => rsp.json());
  }
}
