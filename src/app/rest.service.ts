import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private headers = new Headers(
    {
      'Content-Type' : 'application/json',
      'Authorization' : ''
    });
    private options = new RequestOptions({ headers: this.headers });
    
  constructor(private http: Http) { }

  
  callLogin(params){
    
    let data = JSON.stringify({params});
      console.log('stigified data:', data)
      return new Promise((resolve, reject) => {
        this.http.post('https://vitasenior-test.eu-gb.mybluemix.net/login', params, this.options)
        .toPromise()
        .then((response) =>
        {
          console.log('API Response : ', response.json());
          resolve(response.json());
        })
        .catch((error) =>
        {
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });
  }

}
