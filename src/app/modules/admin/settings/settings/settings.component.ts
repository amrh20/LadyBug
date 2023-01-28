import { Component, OnInit } from "@angular/core";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  settings: any;
  reportPrice: any;
  weatherbackground: any;
  infoPdf: any;
  constructor(private _crudService: CrudRequestsService) {}

  ngOnInit(): void {
    this._crudService.get(`settings/report_price`).subscribe((res: any) => {
      this.reportPrice = res.data;
    });
    this._crudService
      .get(`settings/weather_background`)
      .subscribe((res: any) => {
        this.weatherbackground = res.data;
      });
    this._crudService.get(`settings/info_pdf`).subscribe((res: any) => {
      this.infoPdf = res.data;
    });
  }
}
