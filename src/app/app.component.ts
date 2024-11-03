import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Article } from './article';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddArticleComponent } from './add-article/add-article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,AddArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Liste des articles :";
  articles = [
    new Article("Intelligence Artificielle et Éthique : Peut-on Tout Permettre ?","https://images.radio-canada.ca/v1/ici-premiere/16x9/grandes-idees-intelligence-artificielle.jpg",new Date(),0,"Description"),
    new Article("Le Cinéma Indépendant : Un Écho à la Réalité Sociale","https://lematin.ma/lematin/uploads/images/2024/04/17/302723.jpg",new Date(),0,"Description"),
  ];
  searchTerm: string = '';
  showAddForm: boolean = false;
  addArticleToList(article: Article) {
    this.articles.push(article);
    this.sortArticles();
  }
  incrementScore(article: Article) {
    article.score++;
    this.sortArticles();}
  decrementScore(article: Article) {
      if (article.score > 0) {
        article.score--;
        this.sortArticles();
      }}
  sortArticles() {
        this.articles.sort((a, b) => b.score - a.score);
      }
  filteredArticles() {
        return this.articles.filter(article => article.titre.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }


}
