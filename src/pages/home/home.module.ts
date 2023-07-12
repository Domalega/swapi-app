import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CardPersonComponent } from 'src/components/cardPerson/cardPerson.component';
import { CardPlanetComponent } from 'src/components/cardPlanet/cardPlanet.component';
import { ModalComponent } from 'src/components/modal/modal.component';
import { NavbarHomeComponent } from 'src/components/navBarHome/navBarHome.component';
import { NavbarResidentsComponent } from 'src/components/navBarResidents/navBarResidents.component';

@NgModule({
  declarations: [
    CardPlanetComponent,
    NavbarResidentsComponent,
    NavbarHomeComponent,
    ModalComponent,
    CardPersonComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    CardPlanetComponent,
    NavbarResidentsComponent,
    NavbarHomeComponent,
    ModalComponent,
    CardPersonComponent,
  ],
})
export class HomeModule {}
