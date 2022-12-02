import { Component, OnInit } from '@angular/core';
import { SpitofyService } from 'src/app/services/spitofy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  artistas: any[]=[];

  constructor(private spitofy: SpitofyService) {}

  ngOnInit(): void {}
  buscar(termino: string) {
    console.log(termino);
    this.spitofy.getArtist(termino)
    .subscribe((data: any) => {
      this.artistas = data.artists.items;
      console.log(data.artists.items);
      
    });
  }
}
