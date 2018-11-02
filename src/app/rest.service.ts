import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from "@angular/http";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class RestService {
  constructor(private http: Http) {}

  doPost(url, params, options) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          "https://vitasenior.eu-gb.mybluemix.net" + url,
          params,
          options
        )
        .toPromise()
        .then(response => {
          resolve(response.json());
        })
        .catch(error => {
          console.error("API Error : ", error);
          reject(error.json());
        });
    });
  }
  doGet(url, options) {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://vitasenior.eu-gb.mybluemix.net" + url, options)
        .toPromise()
        .then(response => {
          resolve(response.json());
        })
        .catch(error => {
          console.error("API Error : ", error);
          reject(error.json());
        });
    });
  }
}
