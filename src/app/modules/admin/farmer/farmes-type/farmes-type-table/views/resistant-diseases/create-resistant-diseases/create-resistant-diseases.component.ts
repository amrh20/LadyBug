import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-create-resistant-diseases",
  templateUrl: "./create-resistant-diseases.component.html",
  styleUrls: ["./create-resistant-diseases.component.scss"],
})
export class CreateResistantDiseasesComponent implements OnInit {
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService,
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.acsGet();
    this.isEdit = false;

    this._activeRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.idEdit = params["id"];
      }
    });
  }

  acsGet() {
    this._CrudRequestsService.get("diseases").subscribe((data: any) => {
      this.asc = data.data.all.map(function (o: any) {
        return { id: o.id, name: o.name.ar };
      });
    });
  }

  min: any = new Date();
  selectedasc: any = [];
  asc: any = [];
  ascData: any = true;
  onSelect(event: any) {
    this.selectedasc = event;
  }

  sendData = () => {
    this.isSubmit = true;
    let data = {
      farmed_type_id: this.idEdit,
      diseases: this.selectedasc,
    };

    console.log(data);
    if (this.selectedasc.length != 0) {
      this.loading = true;

      this._crud.post(`resistant_diseases`, data).subscribe(
        (res: any) => {
          this.loading = false;
          this.isSubmit = false;
          if (res.success) {
            this._setting.successHot(res.message);
            this.goBack();
          } else {
            this._setting.errorHot(res.message);
          }
        },
        (err: any) => {
          this.loading = false;
          this._setting.errorHot(err.message);
        },
        () => {}
      );
    }
  };
  goBack = () => {
    this.route.navigate([
      "/admin/farmer/farmedTypes/resistant-diseases/",
      this.idEdit,
    ]);
  };
}
