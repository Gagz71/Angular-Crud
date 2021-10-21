import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CommentModel} from "../../models/comment.model";
import {Serie} from "../../models/serie.model";
import {ActivatedRoute} from "@angular/router";
import {SerieService} from "../serie/serie.service";


@Injectable({
  providedIn: 'root'
})
export class CommentService {

	comments: BehaviorSubject<Array<CommentModel>>;
	serie: BehaviorSubject<Array<Serie>>;


  constructor(private route: ActivatedRoute, private serieService: SerieService) {
	  this.comments = new BehaviorSubject<Array<CommentModel>>([]);
	  this.serie = new BehaviorSubject<Array<Serie>>([]);
  }


	save(commentToAdd: CommentModel)  {

		/*const id = parseInt(this.route.snapshot.params.id);
		const serie = this.serieService
			.getSerieById(id)
			.then((serieFound: Serie) =>this.serie = serieFound );*/

	  const serie = this.serie.getValue();
	  const comments = this.comments.getValue();
	  //console.log(comments);

	  /*for (let elt of serie){
		  console.log(elt);
	  }*/
	  //series.comments.push(comment);
	  //console.log(serie);
	  //series.comments

	}
}
