import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit {

	@Input() serieToEdit: Serie | undefined;
	@Input() submitLabel: string;
	@Output() formSubmitted: EventEmitter<Serie>;

	form: FormGroup;
	serie: Serie;

  constructor() {
	  this.submitLabel = '';
	  this.serie = new Serie('', new Date(), 0, 0, '', '', '', '');
	  this.form = new FormGroup({});
	  this.formSubmitted = new EventEmitter<Serie>();
  }

  ngOnInit(): void {
	  if(this.serieToEdit){
		  this.serie = this.serieToEdit;
	  }
	  this.initForm();
  }

	onSubmitForm(): void {
		if(this.form.valid){
			this.formSubmitted.emit(this.serie);
		}
	}

	private initForm() {
		this.form.addControl(
			'name',
			new FormControl(
				null,
				[Validators.required, Validators.minLength(1), Validators.maxLength(100)]
			)
		);
		this.form.addControl(
			'firstSeasonReleasedDate',
			new FormControl(
				null,
				[Validators.required]
			)
		);
		this.form.addControl(
			'seasons_nb',
			new FormControl(
				null,
				[Validators.required]
			)
		);
		this.form.addControl(
			'episodes_nb',
			new FormControl(
				null,
				[Validators.required]
			)
		);
		this.form.addControl(
			'shortDescription',
			new FormControl(
				null,
				[Validators.required, Validators.minLength(10), Validators.maxLength(250)]
			)
		);
		this.form.addControl(
			'longDescription',
			new FormControl(
				null,
				[Validators.required, Validators.minLength(50), Validators.maxLength(5000)]
			)
		);
		this.form.addControl(
			'criticism',
			new FormControl(
				null,
				[Validators.required, Validators.minLength(10), Validators.maxLength(250)]
			)
		);
		this.form.addControl(
			'urlPicture',
			new FormControl(
				null,
				[Validators.required]
			)
		);
	}
}
