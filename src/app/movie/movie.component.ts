import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { trendingMovies } from '../../assets/data/trending-movies';
import { theaterMovies } from '../../assets/data/theater-movies';
import { popularMovies } from '../../assets/data/popular-movies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {

  id = 0
  movies = [...trendingMovies, ...theaterMovies, ...popularMovies]
  movie: any

  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']

    this.getMovie()
  }

  getMovie() {
    let filteredMovie = this.movies.filter(
      (movie => movie.id == this.id)
    )
    if (filteredMovie.length > 0) {
      this.movie = filteredMovie[0]
    }
  };

}


