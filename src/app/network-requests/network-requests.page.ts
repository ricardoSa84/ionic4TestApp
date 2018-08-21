import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { Headers, RequestOptions } from "@angular/http";

@Component({
  selector: "app-network-requests",
  templateUrl: "./network-requests.page.html",
  styleUrls: ["./network-requests.page.scss"]
})
export class NetworkRequestsPage implements OnInit {
  public email: any = "jose@a.aa";
  public password: any = "123qweASD";
  public numberOfTimes: any = 1;
  public status = "";
  private requestsMade = 0;
  private requestsToMake = 0;

  private headers = {
    "Content-Type": "application/json",
    Authorization: "",
    "Accept-Version": "1.0.0"
  };

  private data = {
    email: "",
    password: "",
    name: ""
  };

  constructor(private restService: RestService) {}

  ngOnInit() {}

  callAPI() {
    var start = Date.now();
    this.data.email = this.email;
    this.data.password = this.password;
    this.requestsMade = 0;
    this.requestsToMake = 0;
    this.status = "Processing please wait";
    let options = new RequestOptions({ headers: new Headers(this.headers) });
    this.restService.doPost("/login", this.data, options).then(response => {
      console.log(response);
      this.headers.Authorization = response["token"];
      options = new RequestOptions({ headers: new Headers(this.headers) });
      for (var i = 0; i < this.numberOfTimes; i++) {
        this.restService.doGet("/vitabox", options).then(boxList => {
          this.requestsToMake += boxList['vitaboxes'].length
          boxList["vitaboxes"].forEach(box => {
            this.restService
              .doGet("/vitabox/" + box.id + "/patient", options)
              .then(patients => {
                this.requestsMade++;
                if (this.requestsMade === this.requestsToMake) {
                  this.status = "Process finished in " + (Date.now() - start) + "ms";
                }
              });
          });
        });
      }
    });
  }
}
