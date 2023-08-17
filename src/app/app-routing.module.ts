import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/pages/error/error.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { ResidentsComponent } from 'src/pages/residents/residents.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'residents', component: ResidentsComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
