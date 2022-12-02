import { Component, OnInit } from "@angular/core";
import { SpitofyService } from "src/app/services/spitofy.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  errorDetail: string = "";
  constructor(private spitofy: SpitofyService) {
    this.loading = true;
    this.spitofy.getNewRealises().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorService) => {
        this.loading = false;
        this.error = true;
        this.errorDetail = errorService.error.error.message;
        console.log(errorService);
      }
    );
  }

  ngOnInit(): void {}
}
