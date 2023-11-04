import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  // Auth token to increase the number of request we can make per hour
  // Explicitly requesting v3 version of the REST API

  TOKEN_GITHUB = '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';

  headers: HttpHeaders = new HttpHeaders({
    Authorization: `token ${this.TOKEN_GITHUB}`,
    Accept: 'application/vnd.github.v3+json',
  });
  constructor(private http: HttpClient) { }

  BASE_URL = 'https://api.github.com';

  getUserDetails(username: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/${username}`, {
      headers: this.headers,
    });
  }

  getUserRepos(username: string, page: number, max: number): Observable<any> {
    const encodedQuery: string = encodeURI(
      `user:${username} in:name sort:updated-asc`
    );
    return this.http.get(
      `${this.BASE_URL}/search/repositories?q=${encodedQuery}&page=${page}&per_page=${max}`,
      {
        headers: this.headers,
      }
    );
  }
}

