import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  styleUrl: './movie-list.component.css',
  template: `
  <div style="padding: 20px 40px">
  <h1>Мои фильмы</h1>
  <!-- <ng-container [formGroupName] = "i"> -->
  <div *ngFor="let film of films, let i = index" style="padding-top: 30px">
  <!-- <button (click)="deleteContact(i)"
    style="
    position: absolute;
    top: 0;
    rigth: 0;
    background: red;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    ">Delete</button> -->
    <h2 style="margin-top: 5px;">{{ film.title }}</h2>
    <p style="margin-top: 5px;">Год: {{ film.year }}</p>
    <p style="margin-top: 5px;">Режиссер: {{ film.director }}</p>
    <p style="margin-top: 5px;">Актеры: {{ film.actors.join(', ') }}</p>
  </div>
  

  <div style="padding-top: 20px;">
    <h2>Добавить новый фильм</h2>
    <div style="padding-top: 10px;">
    <input style="display:block;margin: 10px;color: #212529;
  background-color: #fff;" type="text" placeholder="Название фильма" [(ngModel)]="newFilm.title" #title = "ngModel" required>
    <div style="margin: 10px" [hidden]="title.valid || title.untouched" class="alert">введите название</div>

    <input style="display:block;margin: 10px;color: #212529;
  background-color: #fff;" type="number" placeholder="Год" [(ngModel)]="newFilm.year" #year = "ngModel" required>
    <div style="margin: 10px" [hidden]="year.valid || year.untouched" class="alert">введите год</div>

    <input style="display:block;margin: 10px;color: #212529;
  background-color: #fff;" type="text" placeholder="Режиссер" [(ngModel)]="newFilm.director" #director = "ngModel" required>
    <div style="margin: 10px" [hidden]="director.valid || director.untouched" class="alert">введите режиссера</div>

    <input style="display:block; color: #212529; background-color: #fff; margin: 10px" type="text" placeholder="Актеры" [(ngModel)]="newFilm.actorsString" #actorsString = "ngModel" required>
    <div style="margin: 10px" [hidden]="actorsString.valid || actorsString.untouched" class="alert">введите актеров</div>

    <button style="display:block;margin: 10px" (click)="addFilm()">Добавить</button>
  </div>
  </div>
</div>
  `,
})
export class MovieListComponent {
  films = [
    { title: 'Звездные войны', year: 1977, director: 'Джордж Лукас', actors: ['Марк Хэмилл', 'Харрисон Форд', 'Кэрри Фишер'] }
  ];
  
  newFilm = {
    title: '',
    year: '',
    director: '',
    actorsString: ''
  };
i: any;

  addFilm() {
    const actors = this.newFilm.actorsString.split(',').map(actor => actor.trim());
    this.films.push({
      title: this.newFilm.title,
      year: 0,
      director: this.newFilm.director,
      actors: actors
    });

    this.newFilm = {
      title: '',
      year: '',
      director: '',
      actorsString: ''
    };
  }
  /* deleteContact(i: number) {
    this.films.removeAt(i);
  } */
}
