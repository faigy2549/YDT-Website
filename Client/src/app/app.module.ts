import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShiurimComponent } from './components/shiurim/shiurim.component';
import { MenubarModule } from 'primeng/menubar';
import { ContactComponent } from './components/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { RavComponent } from './components/rav/rav.component';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';  
import { SelectButtonModule } from 'primeng/selectbutton'; 
import { ButtonModule } from 'primeng/button';  
import { TagModule } from 'primeng/tag';  
import {CardModule} from 'primeng/card';
import { AllShiurimComponent } from './components/all-shiurim/all-shiurim.component';
import {TableModule} from 'primeng/table';
import { AlumniComponent } from './components/alumni/alumni.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ContactComponent,
    RavComponent,
    ShiurimComponent,
    AllShiurimComponent,
    AlumniComponent,
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   CommonModule,
   MenubarModule,
   HttpClientModule,
   DataViewModule,
   FormsModule,  
   SelectButtonModule, 
   ButtonModule,  
   TagModule, 
   CardModule,
   TableModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
