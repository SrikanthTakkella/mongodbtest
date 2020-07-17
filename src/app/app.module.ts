import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel.component'; 
import {HeaderComponent} from './header.component';
import {HomeComponent} from './home.component';
import {routing} from './app.routing';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {InputOverviewExample } from './simple-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,CarouselComponent,HeaderComponent,HomeComponent,InputOverviewExample 
  ],
  imports: [
    BrowserModule,NgbModule,routing,ReactiveFormsModule, BrowserAnimationsModule,MatInputModule,FormsModule,MatCardModule,MatButtonModule,HttpClientModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
