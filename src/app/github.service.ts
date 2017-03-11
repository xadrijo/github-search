import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '6f3b8892f7cb643932b3';
  private client_secret = '4cbfc4f1ff58a98642a5da723f57bb0ac00b161c';

  constructor(private _http: Http) { 
    console.log('Github Service Ready...');
    this.username = 'bradtraversy';
  }

  getUser(){
    let url = 'http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
    return this._http.get(url)
      .map(res => res.json());
  }

  getRepos(){
    let url = 'http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
    return this._http.get(url)
      .map(res => res.json());
  }

  updateUser(username:string){
    this.username = username;
  }

}
