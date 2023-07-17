import { Component } from '@angular/core';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],


})
export class ContactPageComponent {

  ngOnInit(): void {
    this.loadGoogleMaps();
  }

  loadGoogleMaps() {
    // API yüklenene kadar bekleyin
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDOpLYy0p00suXtXnVR727Em9OswubGjr4&callback=initMap';
    script.defer = true;
    document.body.appendChild(script);
  }

  initMap() {
    var google: any;
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 38.4137231, lng: 27.1568675 },
      zoom: 19
    });
  }
}
