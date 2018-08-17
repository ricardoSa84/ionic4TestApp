import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { Headers, RequestOptions } from "@angular/http";

@Component({
  selector: "app-login-register",
  templateUrl: "./login-register.page.html",
  styleUrls: ["./login-register.page.scss"]
})
export class LoginRegisterPage implements OnInit {
  public email: any = "jose@a.aa";
  public password: any = "123qweASD";
  public numberOfTimes: any = 1;
  public status = "";
  private requestsMade = 0;

  private headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "",
    "Accept-Version": "1.0.0"
  });

  private data = {
    email: "",
    password: "",
    name: ""
  };

  constructor(private restService: RestService) {}

  ngOnInit() {}

  callAPI(register) {
    var start = Date.now();
    this.data.email = this.email;
    this.data.password = this.password;
    this.requestsMade = 0;
    this.status = "Processing please wait";
    let options = new RequestOptions({ headers: this.headers });
    console.log("in call api");
    for (var i = 0; i < this.numberOfTimes; i++) {
      if (register) {
        var split = this.data.email.split("@");
        this.data.email = split[0] + i + "@" + split[1];
        console.log("email:", this.data.email);
      }
      this.data.name = "testName";
      console.log("Data: ", this.data);
      this.restService
        .doPost(register ? "/register" : "/login", this.data, options)
        .then(response => {
          this.requestsMade++;
          if (this.requestsMade === this.numberOfTimes) {
            this.status = "Process finished in " + (Date.now() - start) + "ms";
          }
        });
    }
  }
}
