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
        "Bearer BQDsXf2O62F5qG2_CQKKGFgIR2YghhHXjSbYmjtVnOKT0uK-rhuiqZZrvnm3n06IbANlCpUrUo67T7xGOmRp_aUU5tWjwPccf6-aQLNhsL0dJoSePoU",
    });

    return this.http.get(url, { headers });
  }

  getNewRealises() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
