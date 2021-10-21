import { Component, OnInit } from '@angular/core';
import {Serie} from "../../models/serie.model";
import {SerieService} from "../../services/serie/serie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {

  constructor(private serieService: SerieService, private router: Router) { }

  ngOnInit(): void {
  }

	onSubmitAddSerie(serie: Serie): void {
	  this.serieService
		  .save(serie)
		  .then(()=>{
			  this.router.navigateByUrl('home');
		  });
	}
}
