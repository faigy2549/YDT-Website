import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private router: Router) {}
    volumeOpen:boolean=false;
    navigateToAbout(): void {
      this.router.navigate(['/about']);
    }
    volume: number = 0; 

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
    
}
