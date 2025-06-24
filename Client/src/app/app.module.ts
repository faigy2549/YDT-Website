import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   HttpClientModule,
   TabMenuModule,
   OverlayPanelModule,
   ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
