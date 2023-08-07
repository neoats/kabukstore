import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../shared/services/config.service";

@Component({
  selector: "app-services-page",
  templateUrl: "./services-page.component.html",
  styleUrls: ["./services-page.component.scss"]
})
export class ServicesPageComponent implements OnInit {

  
  services$: Observable<any> = new Observable();

  constructor(private config: ConfigService) {}


  ngOnInit(): void {

    this.getBlockData("services");
  }

  getPageData(database: string, id?: number): void {
    this.services$= this.config.getSettings(database, id);
  }

  getBlockData(database: string) {

    this.services$ = this.config.getSettings(database);
  }
}
