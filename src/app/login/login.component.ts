import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
   selector: "app-main",
   templateUrl: "./login.component.html",
   styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  public inputControl : any;
  public hide : boolean = true;
  public message : string =  "Login sent";
  public action : string = "Close";

  constructor(private _snackBar: MatSnackBar) {
  }

  openSnackBar(message : string, action : string) {
    this._snackBar.open(message, action);
  }

  public ngOnInit() : void {
    this.inputControl = new FormControl();
  }
}
