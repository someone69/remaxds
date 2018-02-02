import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search/search.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MaklerMesiacaComponent } from './components/makler-mesiaca/makler-mesiaca.component';
import { NehnutelnostComponent } from './components/nehnutelnost/nehnutelnost.component';
import { ProfilComponent } from './components/profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SearchComponent,
    PortfolioComponent,
    MaklerMesiacaComponent,
    NehnutelnostComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
