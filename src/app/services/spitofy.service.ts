import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SpitofyService {
  constructor(private http: HttpClient) {
    console.log("Spitofy Service Ready");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBRto7M7dEvkQuZc2pjhHzN2IXl5MnHlQthJmMOVxwr9to64CCgZWQXkoBtZqPSEdgVx_9PVCCbMljr1Aoz1YpVIUasqnidu9pagYIXWAFVyO5HSfw",
    });

    return this.http.get(url, { headers });
  }

  getNewRealises() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }
}
