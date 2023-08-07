import { style, transition, trigger, animate,AnimationEvent  } from '@angular/animations';
import { Component, OnInit ,Input, SimpleChanges} from "@angular/core";
import { GraphService } from 'src/app/graphql/graphql-service';

import { ImageModal } from 'src/app/modals/imageModal';
interface Item {
  imageSrc: string;
  imageAlt: String;
}

@Component({
  selector: "app-gallery-page2",
  templateUrl: "./gallery-page2.component.html",
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
  
export class GalleryPage2Component implements OnInit {
  @Input() showCount = false;



  constructor(private graphService: GraphService) { }


  @Input() galleryData: ImageModal[] = [];
  error: any;

  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = { imageSrc: '', imageAlt: '' };

  currentIndex = 0;
  controls = true;
  totalImageCount = 0;


  ngOnInit(): void {
    this.graphService.getImages().subscribe(
      (images) => {
        this.galleryData = images;
        this.totalImageCount = this.galleryData.length;
        this.currentLightboxImage = this.galleryData[0];
      },
      (error) => {
        this.error = error;
        console.error('GraphQL error:', error);
      }
    );
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
