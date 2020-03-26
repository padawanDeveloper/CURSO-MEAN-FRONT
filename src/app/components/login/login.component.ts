import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public status: string;
  public identity: Object;
  public token: string;
  constructor(private _userService: UserService) {
    this.title = "title";
    this.user = new User("", "", "", "", "", "", "", "");
  }

  ngOnInit(): void {
    console.log("login component loading...");
  }

  onSubmit() {
    this._userService.login(this.user).subscribe(
      response => {
        this.identity = response.user;
        this.token = response.token;
        if (!this.identity) {
          this.status = "error";
        } else {
          this.status = "success";
          localStorage.setItem("token", this.token);
        }
      },
      error => {
        const errorMessage = <any>error;
        if (errorMessage != null) {
          this.status = "error";
        }
      }
    );
  }
}
