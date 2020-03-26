import { Component, OnInit, DoCheck } from "@angular/core";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  public title = "MEAN-SOCIAL";
  public identity;
  constructor(private _userService: UserService) {
    this.title = "Curso MEAN";
  }

  ngOnInit() {
    this.identity = this._userService.getToken();
  }

  ngDoCheck() {
    this.identity = this._userService.getToken();
  }
}
