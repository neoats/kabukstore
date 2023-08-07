import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryPage2Component } from "./gallery-page2/gallery-page2.component";

const routes: Routes = [{ path: "", component: GalleryPage2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
