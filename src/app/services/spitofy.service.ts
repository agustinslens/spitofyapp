import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpitofyService {
  constructor(private http: HttpClient) {
    console.log('Spitofy Service Ready');
  }

  getNewRealises() {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBLN86_QC9gDq5FP8CBBUqQFSjuuVxWUk9jyYwv0mFXB1kzffS6rmXJF2PJy29r-jXdfWt187AXvwV3PVeMk95X9i932iFAKDL8IU4paQhY_hxYdNs'
    })
   return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers})

  }

  getArtist(termino:string){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBLN86_QC9gDq5FP8CBBUqQFSjuuVxWUk9jyYwv0mFXB1kzffS6rmXJF2PJy29r-jXdfWt187AXvwV3PVeMk95X9i932iFAKDL8IU4paQhY_hxYdNs'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
  }
}
