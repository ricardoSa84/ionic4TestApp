import { Component, OnInit } from "@angular/core";
import { WebWorkerService } from "ngx-web-worker";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cpuintensive",
  templateUrl: "./cpuintensive.page.html",
  styleUrls: ["./cpuintensive.page.scss"]
})
export class CPUIntensivePage implements OnInit {
  private single: String;
  public results: any[] = [];

  constructor(
    private _webWorkerService: WebWorkerService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.single = params["single"];
    });
  }

  ngOnInit() {
    var count = 0;
    var startTime = Date.now();
    if (this.single === "0") {
      this.results.push(this.cpuIntensiveTask(undefined));
      this.results.push(
        "Process finished in: " + Math.ceil(Date.now() - startTime) + "ms"
      );
    } else if (this.single === "1") {
      for (var i = 1; i <= 32; i++) {
        const promise = this._webWorkerService.run(this.cpuIntensiveTask,i);
        promise.then(result => {
          this.results.push(result);
          count++;
          if (count === 32) {
            // console.log('Process finished in: ' + Math.ceil(Date.now() - startTime) + 'ms')
            this.results.push(
              "Process finished in: " + Math.ceil(Date.now() - startTime) + "ms"
            );
          }
        });
      }
    }
  }

  cpuIntensiveTask(val) {
    var start = Date.now();
    for (var x = 0; x < 100000; x++) {
      for (var y = 2; y < x; y++) {
        if (x % y === 0) {
          // console.log(x + 'Não é primo.')
          break;
        }
      }
      // console.log(x + ' é primo.')
    }
    return "Task " + (val != undefined ? val.toString() : "" ) + " finished in: " + Math.ceil(Date.now() - start) + "ms";
  }
}
