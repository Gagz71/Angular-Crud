import {Component, OnDestroy, OnInit} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {Subscription} from "rxjs";
import {SerieService} from "../../services/serie/serie.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit, OnDestroy {
	series: Array<Serie>;
	seriesSub: Subscription;

  constructor(private seriesService: SerieService) {
	  this.series = [];
	  this.seriesSub = new Subscription();
  }

  ngOnInit(): void {
	  this.seriesSub = this.seriesService
		  .series
		  .subscribe((series: Array<Serie>) => {
			  console.log(series);
			  this.series = series;
		  }
	  );
  }

  ngOnDestroy() {
	  this.seriesSub.unsubscribe();
  }

}
