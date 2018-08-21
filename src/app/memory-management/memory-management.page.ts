import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-memory-management',
  templateUrl: './memory-management.page.html',
  styleUrls: ['./memory-management.page.scss'],
})
export class MemoryManagementPage implements OnInit {

  public numberOfTimes;
  private counter;
  public status;
  private start;


  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.counter = params["counter"];
      this.start = params["start"];
    });
  }

  ngOnInit() {
    if(this.counter != NaN && this.start != undefined){
      if (this.counter === '0') {
        this.status = Date.now() - parseInt(this.start)
      } else {
        this.router.navigate(['MemoryManagement/' + (parseInt(this.counter) - 1) + '/' + this.start])
      }
    }
  }

  startProcess () {
    const count = this.numberOfTimes
    const srt = Date.now()
    this.router.navigate(['MemoryManagement/' + count + '/' + srt]);
  }

}
