import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ButtonModule } from 'primeng/button';  
import { TagModule } from 'primeng/tag';  
import {CardModule} from 'primeng/card';
import { AllShiurimComponent } from './components/all-shiurim/all-shiurim.component';
import {TableModule} from 'primeng/table';
import { AlumniComponent } from './components/alumni/alumni.component';
import {DividerModule} from 'primeng/divider'
import { DropdownModule } from 'primeng/dropdown';
import { DonateComponent } from './components/donate/donate.component';
import { MessageModule } from 'primeng/message';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule,} from 'primeng/inputtext';
import {SplitterModule} from 'primeng/splitter'
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
    DonateComponent,
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   CommonModule,
   MenubarModule,
   HttpClientModule,
   DataViewModule,
   FormsModule,  
   ButtonModule,  
   TagModule, 
   CardModule,
   TableModule,
   DividerModule,
   DropdownModule,
   MessageModule,
   FieldsetModule,
   InputTextModule,
   SplitterModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
