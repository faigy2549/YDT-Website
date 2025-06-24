import { NgModule } from '@angular/core';
import { JoinNewsletterComponent } from './join-newsletter.component';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [JoinNewsletterComponent],
  imports: [
  ButtonModule,
  CommonModule,
  FormsModule,
  CardModule,
  MessageModule,
  MultiSelectModule,
  InputNumberModule,
  InputTextModule,
],
  exports: [JoinNewsletterComponent] 
})
export class JoinNewsletterModule {}
