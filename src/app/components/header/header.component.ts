import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

	token: string;
	tokenSub: Subscription;

  constructor(private authService: AuthService, private router:Router) {
	  this.token = '';
	  this.tokenSub = new Subscription();
  }

  ngOnInit(): void {
  }

	onClickLogout(): void {
	  this.authService
		  .logout()
		  .then(()=>{
			  this.router.navigateByUrl('');
		  });
	}

	ngOnDestroy() {
	  this.tokenSub.unsubscribe();
	}
}
