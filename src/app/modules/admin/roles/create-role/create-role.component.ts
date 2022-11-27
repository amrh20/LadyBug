import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-create-role",
  templateUrl: "./create-role.component.html",
  styleUrls: ["./create-role.component.scss"],
})
export class CreateRoleComponent implements OnInit {
  addForm = new FormGroup({
    description: new FormControl(""),
    display_name: new FormControl(""),
    name: new FormControl(""),
    permissions: new FormControl(""),
  });
  passSelected: boolean = true;
  selectedpermissions: any = [];
  permissions: any = [];
  editMood: boolean = false;
  id: any;
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService,
    private Router: Router,
    private _activeRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getRoles();
    this.editMood = false;

    this._activeRouter.params.subscribe((res: any) => {
      this.id = res.id;
      this._CrudRequestsService
        .get(`roles/${res.id}`)
        .subscribe((data: any) => {
          this.addForm.patchValue({
            name: data?.data?.name,
            display_name: data?.data?.display_name,
            description: data?.data?.description,
          });
          this.passSelected = true;
          let arr = [];
          for (var i = 0, len = data.data.permissions.length; i < len; i++) {
            arr.push(data.data.permissions[i].id);
          }
          this.selectedpermissions = arr;
        });
    });
    if (this.id) {
      this.editMood = true;
      this.passSelected = false;
    }
  }

  getRoles = () => {
    this._CrudRequestsService.get("permissions").subscribe((data: any) => {
      this.permissions = data.data;
    });
  };
  onSelect(event: any) {
    this.addForm.patchValue({
      permissions: event,
    });
  }

  add() {
    this._CrudRequestsService.post("roles", this.addForm.value).subscribe(
      (res: any) => {
        this._SettingService.successHot(res.message);
        this.addForm.reset();
        this.Router.navigate(["/admin/roles"]);
      },
      (err) => {
        this._SettingService.errorHot(err.message);
      }
    );
  }

  edit() {
    this._CrudRequestsService
      .put(`roles/${this.id}`, this.addForm.value)
      .subscribe(
        (res: any) => {
          this._SettingService.successHot(res.message);
          this.addForm.reset();
          this.Router.navigate(["/admin/roles"]);
        },
        (err) => {
          this._SettingService.errorHot(err.message);
        }
      );
  }
}
