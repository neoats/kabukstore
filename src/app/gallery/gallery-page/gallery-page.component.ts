import { style, transition, trigger, animate,AnimationEvent  } from '@angular/animations';
import { Component, OnInit ,Input} from "@angular/core";

interface Item {
  imageSrc: string;
  imageAlt: String;
}

@Component({
  selector: "app-gallery-page",
  templateUrl: "./gallery-page.component.html",
  styleUrls: ['./gallery-lightbox.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.8}))
      ])
    ])
  ]
})
export class GalleryPageComponent   {
  @Input() galleryData: Item[] = [ {
    imageSrc: './assets/images/gallery-images/k1.jpg?crop=100,100,300,300',
    imageAlt: '1'
  },
  {
    imageSrc: './assets/images/gallery-images/k2.jpg',
    imageAlt: '2'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642618215095-3523a9a36893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      imageAlt: '5'
    },
  {
    imageSrc: './assets/images/gallery-images/k4.jpg',
    imageAlt: '3'
  },
  {
    imageSrc: './assets/images/gallery-images/k3.jpg',
    imageAlt: '4'
  },

  {
    imageSrc: './assets/images/gallery-images/k5.jpg',
    imageAlt: '6'
  }
];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if(event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.galleryData.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0) {
      this.currentIndex = this.galleryData.length - 1;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }
}
