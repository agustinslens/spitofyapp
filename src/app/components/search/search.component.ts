import { Component, OnInit } from "@angular/core";
import { SpitofyService } from "src/app/services/spitofy.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean | undefined;
  constructor(private spitofy: SpitofyService) {
    
  }

  ngOnInit(): void {}
  buscar(termino: string) {
    this.loading = true;
    this.spitofy.getArtists(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }
}
