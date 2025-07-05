import { AfterViewInit, Component, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  isBrowser: boolean;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.isBrowser) return;

    const elements = this.el.nativeElement.querySelectorAll('.animated, .slide-in-left, .slide-in-right, .bounce-in');

    elements.forEach((el: HTMLElement, index: number) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        setTimeout(() => {
          el.classList.add('show');
        }, index * 10);
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.onScroll();
    }
  }
}
