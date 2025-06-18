import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { EventsComponent } from './events/events.component';
import { EventsEditComponent } from './events-edit/events-edit.component';
import { AlumniComponent } from './alumni/alumni.component';
import { AlumniEditComponent } from './alumni-edit/alumni-edit.component';
import { RebbeimComponent } from './rebbeim/rebbeim.component';
import { RebbeimEditComponent } from './rebbeim-edit/rebbeim-edit.component';
import { ShiurimComponent } from './shiurim/shiurim.component';
import { ShiurimEditComponent } from './shiurim-edit/shiurim-edit.component';
import { TabViewModule } from 'primeng/tabview';
import {TableModule} from 'primeng/table'
import {DialogModule} from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    SubscribersComponent,
    EventsComponent,
    EventsEditComponent,
    AlumniComponent,
    AlumniEditComponent,
    RebbeimComponent,
    RebbeimEditComponent,
    ShiurimComponent,
    ShiurimEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    DialogModule,
    FileUploadModule,
     FormsModule,
  ],
})
export class AdminModule { }
