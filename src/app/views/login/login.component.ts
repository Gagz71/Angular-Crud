import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username: string;
	password: string;
	//errMsg: string;

  constructor(private authService: AuthService, private router: Router) {
	  this.username = '';
	  this.password = '';
  }

  ngOnInit(): void {
  }

	onSubmitLoginForm(form: NgForm):void {
		this.authService
			.login(this.username, this.password)
			.then(() => {
				this.router.navigateByUrl('home');
			})
			/*.catch((errMsg:string)=>{
				this.errMsg = errMsg;
			});*/
		}

}
