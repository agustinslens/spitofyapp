import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
//routes
import { ROUTES } from './app.routes';
//services
import { SpitofyService } from './services/spitofy.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingsComponent } from './components/shared/loadings/loadings.component';
import { ErrorControllerComponent } from './components/shared/error-controller/error-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingsComponent,
    ErrorControllerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [SpitofyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
