import { Component, ElementRef, HostListener, Input, ViewChild, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Shiur } from 'src/app/models/Shiur.Model';

@Component({
  selector: 'app-shiurim-table',
  templateUrl: './shiurim-table.component.html',
  styleUrls: ['./shiurim-table.component.css']
})
export class ShiurimTableComponent implements OnInit {

  @Input() filteredShiurim: Shiur[] = [];
  @Input() shiurim: Shiur[] = [];
  @Input() viewMode: 'full' | 'compact' = 'full';
  @ViewChild('tableRef') tableRef!: ElementRef;

  windowWidth = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;

      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = event.target.innerWidth;
    }
  }

  onPageChange(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  }
}
