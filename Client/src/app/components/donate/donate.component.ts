import { Component } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  donationAmount = 7000; 
  recentDonations:[]=[];
constructor(
  @Inject(PLATFORM_ID) private platformId: Object
) {}
  tickMarks = Array.from({ length: 9 }, (_, i=1) => ({
    label: `$${i * 5}K`,
    value: i * 5000,
    angle: 125 + (i * 36) }));

    get donationPercentage(): string {
      const percentage = Math.round((this.donationAmount / 40000) * 100);
      return `${percentage}% Raised`;
    }
openDonationLink() {
    if (isPlatformBrowser(this.platformId)) {
  window.open('https://secure.cardknox.com/yeshivasdvartorah', '_blank');
 }
}
}
//0502758444