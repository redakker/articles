import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MAX_TAG_ITEM_FOR_ARTICLE } from 'src/app/app.constants';
import { Article, Tag } from 'src/app/models/article.model';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-article-modal',
  templateUrl: './article-modal.component.html',
  styleUrls: ['./article-modal.component.scss']
})
export class ArticleModalComponent implements OnInit {

  @Input() article: Article;

  maxItems = MAX_TAG_ITEM_FOR_ARTICLE;
  tagseparators = ['Enter', ' '];
  form: FormGroup;
  tagList: Tag [] = [];

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
    this.applyTags(this.article);
  }

  getPictureKeyWord(article: Article) {
    return this.util.getPictureKeyWord(article);
  }

  fieldHasError(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.dirty
  }

  setDirty() {
    this.form.markAsDirty();
  }

  applyTags (article: Article) {
    for (let tag of article.tagList) {
      this.tagList.push({
        display: tag,
        value: tag
      });
    }
  }
  tagListToFlat() {
    const flatTagsList = [];
    for (let tag of this.tagList) {
      flatTagsList.push(tag.value);
    }
    return flatTagsList;
  }

  save() {
    let article: Article = this.form.getRawValue() as Article;
    article.tagList = this.tagListToFlat();
    this.modal.close(article);
  }

}
