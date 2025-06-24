import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { CarouselModule } from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { TabMenuModule } from 'primeng/tabmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { SidebarModule } from 'primeng/sidebar';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import {SkeletonModule} from 'primeng/skeleton'

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // PrimeNG
    ButtonModule,
    CardModule,
    TableModule,
    DividerModule,
    DropdownModule,
    MessageModule,
    FieldsetModule,
    ImageModule,
    CalendarModule,
    TooltipModule,
    CarouselModule,
    ProgressSpinnerModule,
    OrderListModule,
    DialogModule,
    SliderModule,
    TabMenuModule,
    OverlayPanelModule,
    KnobModule,
    SidebarModule,
    CheckboxModule,
    MenubarModule,
    SkeletonModule,
    InputNumberModule,
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // PrimeNG
    ButtonModule,
    CardModule,
    TableModule,
    DividerModule,
    DropdownModule,
    MessageModule,
    FieldsetModule,
    InputNumberModule,
    ImageModule,
    CalendarModule,
    TooltipModule,
    CarouselModule,
    ProgressSpinnerModule,
    OrderListModule,
    DialogModule,
    SliderModule,
    TabMenuModule,
    OverlayPanelModule,
    KnobModule,
    SidebarModule,
    CheckboxModule,
    MenubarModule,
    SkeletonModule,
  ]
})
export class SharedPrimeNGModule {}
