import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {

  private map: google.maps.Map;

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {
    const mapElement = document.getElementById('map');
    if (mapElement !== null) {
      this.map = new google.maps.Map(mapElement, {
        center: { lat: 38.4137231, lng: 27.1568675 },
        zoom: 19
      });
    }
  }
}
