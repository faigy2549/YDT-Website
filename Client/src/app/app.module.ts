import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { Observable } from 'rxjs';
import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './TokenInterceptor.interceptor';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
  // FormsModule,
  // ReactiveFormsModule,
  // ToastModule,
  // TableModule,
  // ToolbarModule,
  // HttpClientModule,
  // ButtonModule,
  // DialogModule,
  // ConfirmDialogModule,
  // BrowserAnimationsModule,
  // TabMenuModule,
  // DataViewModule,
  // CarouselModule,
  // DropdownModule,
  // CheckboxModule,
  // MenuModule,
  // MenubarModule,
  ],
  providers: [MessageService,ConfirmationService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
