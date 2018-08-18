import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-load-image",
  templateUrl: "./load-image.page.html",
  styleUrls: ["./load-image.page.scss"]
})
export class LoadImagePage implements OnInit {
  public numberOfTimes: any;
  public imagePaths: any[] = [];
  private numberOfImagesLoaded;
  public status = "";
  private start;
  private local;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.local = params["local"];
    });
  }

  ngOnInit() {}

  loadImages() {
    this.start = Date.now();
    this.imagePaths = [];
    this.status = "Processing please wait";
    this.numberOfImagesLoaded = 0;
    for (var i = 0; i < this.numberOfTimes; i++) {
      this.imagePaths.push(
        this.local == "1"
          ? "../../assets/images/highres.jpg"
          : "https://wallpapertag.com/wallpaper/full/7/9/1/134025-cool-medical-wallpaper-2000x1153-ipad-retina.jpg"
      );
    }
  }

  imageFinishedLoading() {
    this.numberOfImagesLoaded++;
    if (this.numberOfImagesLoaded === parseInt(this.numberOfTimes)) {
      this.status = "Process finished in " + (Date.now() - this.start) + "ms";
    }
  }
}
