import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//module routing   
import { RoutingModule } from './routing.module';


//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
