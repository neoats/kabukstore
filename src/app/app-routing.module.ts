import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((mod) => mod.HomeModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then((mod) => mod.AboutModule),
  },
  {
    path: "services",
    loadChildren: () =>
      import("./services/services.module").then((mod) => mod.ServicesModule),
  },
  {
    path: "gallery",
    loadChildren: () =>
      import("./gallery/gallery.module").then((mod) => mod.GalleryModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then((mod) => mod.ContactModule),
  },
  {
    path: "404",
    loadChildren: () =>
      import("./notfound/notfound.module").then((mod) => mod.NotfoundModule),
  },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
