import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   MenubarModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
