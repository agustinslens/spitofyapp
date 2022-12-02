import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpitofyService } from "src/app/services/spitofy.service";
@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styleUrls: ["./artista.component.css"],
})
export class ArtistaComponent {
  artista: any = {};
  loadings: boolean | undefined;
  topTracks: any[] = [];
  constructor(private router: ActivatedRoute, private spitofy: SpitofyService) {
    this.loadings = true;
    this.router.params.subscribe((data) => {
      this.getArtist(data.id);
      this.getTopTracks(data.id);
    });
  }

  getArtist(id: string) {
    this.loadings = true;
    this.spitofy.getArtist(id).subscribe((data) => {
      this.artista = data;
      this.loadings = false;
    });
  }
  getTopTracks(id: string) {
    this.loadings = true;
    this.spitofy.getTopTracks(id).subscribe((data) => {
      console.log(data);
      
      this.topTracks = data;
    });
  }
}
