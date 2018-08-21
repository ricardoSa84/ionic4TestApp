import { Injectable } from "@angular/core";
import { WebWorker } from "ngx-web-worker";

@Injectable({
  providedIn: "root"
})
export class WebWorkerService {
  constructor(private webWorker: WebWorker) {}

  run(funcToRun) {
    const promise = this.webWorker.run(funcToRun);
    return promise;
  }
}
