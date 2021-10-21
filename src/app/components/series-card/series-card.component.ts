import {Component, Input, OnInit, Output} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {SerieService} from "../../services/serie/serie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.css']
})
export class SeriesCardComponent implements OnInit {

	@Input() series: Array<Serie>;
	//@Input() id: number | undefined;
	// @Input() name: string;
	// @Input() firstSeasonReleasedDate: Date;
	// @Input() seasons_nb: number;
	// @Input() description: string;
	// @Input() criticism: string;*/
	 @Input() comments: Array<Comment>;

	serie: Serie | undefined;

  constructor(private serieService: SerieService, private route: ActivatedRoute, private router: Router) {
	  this.series = [];
	  this.comments = [];
  }

  ngOnInit(): void {

  }

	onClickDeleteBtn(id:number): void {

		this.serieService.deleteSerie(id);

	}
}
