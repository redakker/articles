import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from 'src/app/models/article.model';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-article-modal',
  templateUrl: './article-modal.component.html',
  styleUrls: ['./article-modal.component.scss']
})
export class ArticleModalComponent implements OnInit {

  @Input() article: Article;

  form: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private util: UtilitiesService
  ) {
    this.form = this.formBuilder.group({
        id: [],
        slug: [],
        title: ['', Validators.required],
        description: ['', [Validators.required, Validators.maxLength(30)]],
        body: ['']
      }
    );
   }

  ngOnInit(): void {
    this.form.patchValue(this.article);
  }

  getPictureKeyWord(article: Article) {
    return this.util.getPictureKeyWord(article);
  }

  fieldHasError(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.dirty
  }

  save() {
    let article: Article = this.form.getRawValue() as Article;
    this.modal.close(article);
  }

}
