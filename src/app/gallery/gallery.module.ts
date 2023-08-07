import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryPage2Component } from "./gallery-page2/gallery-page2.component";

@NgModule({
  declarations: [ GalleryPage2Component],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}
