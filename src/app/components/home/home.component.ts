import { Component, OnInit } from '@angular/core';
import { SpitofyService } from 'src/app/services/spitofy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[]=[];

  constructor(private spitofy: SpitofyService) {
    this.spitofy.getNewRealises()
    .subscribe((data:any) =>{
      console.log();
      this.nuevasCanciones = data;
    })
  }

  ngOnInit(): void {}
}
