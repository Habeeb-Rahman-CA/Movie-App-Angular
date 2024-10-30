import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { trendingMovies } from '../../assets/data/trending-movies';
import { theaterMovies } from '../../assets/data/theater-movies';
import { popularMovies } from '../../assets/data/popular-movies';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {

  id = 0
  movies = [...trendingMovies, ...theaterMovies, ...popularMovies]
  movie : any

  constructor(private activatedRoute: ActivatedRoute,   ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']

    this.getMovie()
  }

  getMovie() {
    let index = this.movies.findIndex(
      (movie => movie.id == this.id)
    )
    if (index > -1) {
      this.movie = this.movies[index]
    }
  };

}


