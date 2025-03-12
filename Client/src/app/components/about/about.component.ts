import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  constructor( private el: ElementRef) {}
  @HostListener('window:scroll', [])
   
  onScroll(): void {
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
    this.onScroll(); 
  }
}
