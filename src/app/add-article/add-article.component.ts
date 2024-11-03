import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../article';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  showAddForm: boolean = false;

  newArticle: Article = new Article('', '', new Date(), 0, '');

  @Output() articleAdded = new EventEmitter<Article>();

  addArticle() {
    this.articleAdded.emit(new Article(
      this.newArticle.titre,
      this.newArticle.image,
      this.newArticle.datepub,
      this.newArticle.score,
      this.newArticle.description
  ));
    this.newArticle = new Article('', '', new Date(), 0, '');
    this.showAddForm = false;
  }
}
