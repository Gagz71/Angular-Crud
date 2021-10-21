import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentModel} from "../../models/comment.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Serie} from "../../models/serie.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment/comment.service";
import {SerieService} from "../../services/serie/serie.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

	@Input() serieToEdit: Serie | undefined;
	@Input() commentToEdit: CommentModel | undefined;
	@Input() submitLabel: string;
	@Output() formSubmitted: EventEmitter<CommentModel>;

	form: FormGroup;
	comment: CommentModel;
	serie: Serie | undefined;


  constructor(private route: ActivatedRoute, private commentService: CommentService, private serieService: SerieService, private router: Router) {
	  this.submitLabel = '';
	  this.comment = new CommentModel('', '');
	  this.form = new FormGroup({});
	  this.formSubmitted = new EventEmitter<CommentModel>();
  }

  ngOnInit(): void {
		if (this.commentToEdit){
			this.comment= this.commentToEdit;
		}
		this.initForm();
  }

  onSubmitForm(): void{
	  if (this.form.valid){
		  this.formSubmitted.emit(this.comment);
	  }
  }

	private initForm() {
		this.form.addControl('author', new FormControl(
			null,
			[Validators.required, Validators.minLength(2), Validators.maxLength(50)]
		));
		this.form.addControl('content', new FormControl(
			null,
			[Validators.required, Validators.maxLength(1000), Validators.minLength(1)]
		));
	}
}
