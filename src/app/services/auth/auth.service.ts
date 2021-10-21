import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	token: BehaviorSubject<string>;

  constructor() {
	  this.token = new BehaviorSubject<string>('');
  }

  login(username: string, password: string): Promise<void | string > {
	  return new Promise<void | string>(
		  (res, rej)=>{
			  setTimeout(() => {

				  if(username === 'Administrateur' && password === 'azerty'){
					  this.token.next('azertyui');
					  res();
				  }else{
					  rej('Les identifiants saisis sont incorrects.');
				  }
			  }, 300);
		  }
	  );
  }

  logout(): Promise<void>{
	  return new Promise<void>(
		  (res, rej) => {
			  this.token.next('');
			  res();
		  }
	  );
  }
}
