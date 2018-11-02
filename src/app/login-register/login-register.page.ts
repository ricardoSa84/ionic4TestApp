import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { Headers, RequestOptions } from "@angular/http";

@Component({
  selector: "app-login-register",
  templateUrl: "./login-register.page.html",
  styleUrls: ["./login-register.page.scss"]
})
export class LoginRegisterPage implements OnInit {
  public email: any = "admin@a.aa";
  public password: any = "123qweASD";
  public numberOfTimes: any = 50;
  public status = "";
  private requestsMade = 0;

  private headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "",
    "Accept-Version": "1.0.0"
  });

  

  constructor(private restService: RestService) {}

  ngOnInit() {}

  callAPI(register) {
    var start = Date.now();
    this.requestsMade = 0;
    this.status = "Processing please wait";
    let options = new RequestOptions({ headers: this.headers });
    for (var i = 0; i < this.numberOfTimes; i++) {
      var data = {
        email: "",
        password: "",
        name: ""
      };
      data.email = this.email;
      data.password = this.password;
      if (register) {
        var split = this.email.split("@");
        data.email = split[0] + i + "@" + split[1];
      }
      data.name = "testName";
      this.restService
        .doPost(register ? "/register" : "/login", data, options)
        .then(response => {
          this.requestsMade++;
          if (this.requestsMade.toString() === this.numberOfTimes) {
            this.status = "Process finished in " + (Date.now() - start) + "ms";
          }
        });
    }
  }
}
