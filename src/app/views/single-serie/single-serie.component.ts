import {Component, Input, OnInit} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {SerieService} from "../../services/serie/serie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment/comment.service";
import {CommentModel} from "../../models/comment.model";

@Component({
  selector: 'app-single-serie',
  templateUrl: './single-serie.component.html',
  styleUrls: ['./single-serie.component.css']
})
export class SingleSerieComponent implements OnInit {

	@Input()serie: Serie | undefined;

	//serie: Serie | undefined;

  constructor(private serieService: SerieService, private commentService: CommentService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
	  const id = parseInt(this.route.snapshot.params.id);
	  this.serieService
		  .getSerieById(id)
		  .then((serieFound: Serie) =>this.serie = serieFound );
  }


	/*onClickAddComment( comments: Array<CommentModel>, serie: Serie) {

	}*/

	onSubmitAddComment(comment: CommentModel) {
		const serieComments = this.serie?.comments;
		if(serieComments){
			serieComments.push(comment);
			console.log(serieComments);
		}
	}
}
