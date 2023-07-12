import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CardPersonComponent } from 'src/components/cardPerson/cardPerson.component';
import { CardPlanetComponent } from 'src/components/cardPlanet/cardPlanet.component';
import { ModalComponent } from 'src/components/modal/modal.component';
import { NavbarComponent } from 'src/components/navBar/navBar.component';

@NgModule({
  declarations: [
    CardPlanetComponent,
    NavbarComponent,
    ModalComponent,
    CardPersonComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    CardPlanetComponent,
    NavbarComponent,
    ModalComponent,
    CardPersonComponent,
  ],
})
export class HomeModule {}
