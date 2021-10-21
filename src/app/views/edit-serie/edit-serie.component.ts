import { Component, OnInit } from '@angular/core';
import {Serie} from "../../models/serie.model";
import {ActivatedRoute, Router} from "@angular/router";
import {SerieService} from "../../services/serie/serie.service";

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.css']
})
export class EditSerieComponent implements OnInit {

	serie: Serie | undefined;

  constructor(private route: ActivatedRoute, private serieService: SerieService, private router: Router) { }

  ngOnInit(): void {
	  const id = parseInt(this.route.snapshot.params.id);

	  this.serieService
		  .getSerieById(id)
		  .then((serie: Serie) => this.serie = serie );
  }

	onSubmitEditSerie(serieEdited: Serie) {

	  	this.serieService
			.update(serieEdited)
			.then(()=> this.router.navigateByUrl('home'));

	}
}
