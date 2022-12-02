import { Component, OnInit } from '@angular/core';
import { SpitofyService } from 'src/app/services/spitofy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[]=[];
  loading:boolean;

  constructor(private spitofy: SpitofyService) {
    this.loading=true;
    this.spitofy.getNewRealises()
    .subscribe((data:any) =>{
      this.nuevasCanciones = data;
      this.loading=false
    })
  }

  ngOnInit(): void {}
}
