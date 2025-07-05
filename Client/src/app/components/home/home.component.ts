import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showNewsletter:boolean=false;
  @HostListener('window:scroll')
checkScroll() {
  if (isPlatformBrowser(this.platformId)) {
    this.showNewsletter = window.scrollY > 500;
  }
}

   constructor(
  private router: Router,
  private el: ElementRef,
  @Inject(PLATFORM_ID) private platformId: Object
) {}

    volumeOpen:boolean=false;
    volume: number = 0;

  navigateToAbout(): void {
  this.router.navigate(['/about']).then(() => {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}
    navigateToNewsletter(): void {
      this.router.navigate(['/newsletter']).then(() => {
       if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
        }
      });
    }
    navigateToShiurim(): void {
      this.router.navigate(['/all-shiurim']).then(() => {
        if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
        }
      });
    }
    

    adjustVolume(video: HTMLVideoElement, newVolume: number) {
      video.volume = newVolume;
      video.muted = newVolume === 0; 
    }
    getVolumeIcon(): string {
   
      if (this.volume === 0) {
        return 'pi-volume-off'; 
      } else if (this.volume > 0 && this.volume <= 0.5) {
        return 'pi-volume-down'; 
      } else {
        return 'pi-volume-up'; 
      }
    }
    toggleVolume():void{
      this.volumeOpen=!this.volumeOpen;
    }
    @HostListener('window:scroll', [])
   onScroll(): void {
  if (!isPlatformBrowser(this.platformId)) return;
  const elements = this.el.nativeElement.querySelectorAll('.animated, .slide-in-left, .slide-in-right, .bounce-in');
  elements.forEach((el: HTMLElement, index: number) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      setTimeout(() => {
        el.classList.add('show');
      }, index * 20);
    }
  });
}

    
  
    ngAfterViewInit(): void {
      this.onScroll(); 
      this.checkScroll();
    }
    
}
