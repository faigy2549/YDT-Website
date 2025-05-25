import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { Shiur } from 'src/app/models/Shiur.Model';

@Component({
  selector: 'app-shiurim-table',
  templateUrl: './shiurim-table.component.html',
  styleUrls: ['./shiurim-table.component.css']
})
export class ShiurimTableComponent {

@Input() filteredShiurim:Shiur[]=[];
@Input() viewMode: 'full' | 'compact' = 'full';
 @ViewChild('tableRef') tableRef!: ElementRef;

onPageChange(): void {
  window.scrollTo({ top: 200, behavior: 'smooth' });
}
windowWidth = window.innerWidth;

@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.windowWidth = event.target.innerWidth;
}

ngOnInit() {
  this.windowWidth = window.innerWidth;
}

}
