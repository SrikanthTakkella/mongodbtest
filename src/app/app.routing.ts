import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import { CarouselComponent } from './carousel.component';
import {InputOverviewExample } from './simple-form.component';

const appRoutes : Routes=[
    {path:'home',component:HomeComponent},
    {path:'all',component:CarouselComponent},
    {path:'',redirectTo:"all",pathMatch:'full'},
    {path:'form',component:InputOverviewExample }

];

export const routing = RouterModule.forRoot(appRoutes);