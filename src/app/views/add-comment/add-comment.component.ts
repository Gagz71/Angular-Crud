import { Component, OnInit } from '@angular/core';
import {CommentModel} from "../../models/comment.model";
import {CommentService} from "../../services/comment/comment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Serie} from "../../models/serie.model";
import {SerieService} from "../../services/serie/serie.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

	serie: Serie | undefined;
	//series: BehaviorSubject<Array<Serie>>;

  constructor(private commentService: CommentService, private router: Router, private route: ActivatedRoute, private serieService: SerieService) {
	  //this.series = new BehaviorSubject<Array<Serie>>();
  }


  ngOnInit(): void {

  }

}
