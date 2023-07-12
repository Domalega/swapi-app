import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { ResidentsComponent } from 'src/pages/residents/residents.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'residents', component: ResidentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
